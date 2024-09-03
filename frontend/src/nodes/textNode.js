// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { BsCodeSlash } from "react-icons/bs";
import { BsCode } from "react-icons/bs";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]); // State to hold extracted variables

  
  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\}\}/g; // Match {{ variableName }}
    const matches = [...text.matchAll(regex)];
    const extractedVariables = matches.map((match) => match[1]);
    return Array.from(new Set(extractedVariables)); // Remove duplicates
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);
    const newVariables = extractVariables(text);
    setVariables(newVariables); // Update the variables state
  };

const inputVariable =  currText==='' ? <BsCode /> : <BsCodeSlash />


  return (
    <Card title="Text">
      <div>
        <div className="flex justify-content-between flex-wrap my-2">
        <label htmlFor="text" className="flex font-bold ">
          Text: 
        </label><span className="flex ">{inputVariable}</span>
        </div>
        <InputTextarea
          autoResize
          type="text"
          value={currText}
          className="w-full md:w-14rem"
          onChange={handleTextChange}
        >
        </InputTextarea>
      </div>
       {/* Render dynamic handles for each variable */}
       {variables.map((variable) => (
        <Handle
          key={`${id}-${variable}-input`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}-input`}
          style={{ top: `${variables.indexOf(variable) * 30 + 20}px` }} // Adjust position based on index
        />
      ))}
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </Card>
  );
};
