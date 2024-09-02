import React from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from "primereact/card";

const AbstractNode = ({ id, type, renderDataContent}) => {
  
    return (
      
    <Card title={type}>
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
        
        <div className="content">{renderDataContent()}</div>
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
        />
      </Card>
    );
  }
export default AbstractNode