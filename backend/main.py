from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# allow cross-origin calls from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# models for incoming pipeline data
class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Edge]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    # count elements
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # build adjacency list for directed graph
    graph: Dict[str, List[str]] = {}
    for edge in pipeline.edges:
        graph.setdefault(edge.source, []).append(edge.target)

    # detect cycle with DFS
    visited: Dict[str, int] = {}  # 0=unvisited, 1=visiting, 2=done
    is_dag = True

    def dfs(node_id: str):
        nonlocal is_dag
        if visited.get(node_id, 0) == 1:
            # found a back edge
            is_dag = False
            return
        if visited.get(node_id, 0) == 2:
            return
        visited[node_id] = 1
        for nei in graph.get(node_id, []):
            dfs(nei)
        visited[node_id] = 2

    for n in pipeline.nodes:
        nid = n.get('id')
        if nid is not None and visited.get(nid, 0) == 0:
            dfs(nid)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
