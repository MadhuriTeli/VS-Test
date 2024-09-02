// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
   
      <Card title="Text">
    
      <div>
        
      <label htmlFor="text" className="font-bold block my-2">
          Text:
          </label>
        <InputText 
            type="text" 
            value={currText} className="w-full md:w-14rem"
            onChange={handleTextChange} 
          />
      </div> 
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
      </Card>
     
  );
}
