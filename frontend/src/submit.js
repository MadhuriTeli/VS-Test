// submit.js
import React, { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { useStore } from "./store";
import { Toast } from "primereact/toast";
import axios from "axios";

export const SubmitButton = () => {
  const toast = useRef(null);
  const { nodes, edges } = useStore();

  const submitPipeline = async () => {
    const data = {
      nodes: nodes, // Replace with actual nodes data
      edges: edges, // Replace with actual edges data
    };

    const response = await axios.post(`/pipelines/parse`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const pipeline = response.data;
    if (response.status === 200) {
      showSuccess(pipeline);
    } else {
      showError();
    }
  };

  const showSuccess = (pipeline) => {
    let dagStr = pipeline.is_dag
      ? "and pipeline form a directed acyclic graph."
      : "and pipeline do not form a directed acyclic graph.";
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: ` Pipeline have ${pipeline.num_nodes} nodes & ${pipeline.num_edges} edges ${dagStr}`,
      life: 3000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "An error occured",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button type="submit" onClick={submitPipeline}>
          Submit
        </Button>
      </div>
    </>
  );
};
