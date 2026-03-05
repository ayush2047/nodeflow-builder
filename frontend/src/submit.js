import { useState } from "react";
import { styles } from "./styles";
import { useStore } from "./store";

export const SubmitButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    ...styles.button,
    ...(isHovering ? styles.buttonHover : {}),
    ...(isActive ? styles.buttonActive : {}),
  };

  const handleClick = async () => {
    // grab latest pipeline state from the store
    const { nodes, edges } = useStore.getState();
    console.log("submitting pipeline", { nodes, edges });

    try {
      // use absolute URL in case proxy isn't applied or the app wasn't restarted
      const url = "https://nodeflow-builder.onrender.com/pipelines/parse";// "http://localhost:8000/pipelines/parse";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("bad response", res.status, text);
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      alert(
        `Pipeline info:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`,
      );
    } catch (err) {
      console.error("submit failed", err);
      alert(`Failed to submit pipeline: ${err.message}`);
    }
  };

  return (
    <div style={styles.submitButton}>
      <button
        type="button"
        style={buttonStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onClick={handleClick}
      >
        <span>🚀</span>
        <span>Submit Pipeline</span>
      </button>
    </div>
  );
};
