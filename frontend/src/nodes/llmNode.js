// llmNode.js

import { Handle, Position } from 'reactflow';
import { Card } from "primereact/card";

export const LLMNode = ({ id, data }) => {
  console.log("id", id)

  return (
    <Card title="LLM">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </Card>
  );
}
