// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  const options = [
    { value: "Text", optionLable: "Text" },
    { value: "File", optionLable: "File" },
  ];

  return (
    <Card title="Input">
      <div>
        <label htmlFor="name" className="font-bold block my-2">
          Name:
        </label>
        <InputText type="text" value={currName} onChange={handleNameChange}  className="w-full md:w-14rem" />
      </div>
      <div>
        <label htmlFor="type" className="font-bold block my-2">
          Type:
        </label>
        <Dropdown
          value={inputType}
          onChange={handleTypeChange}
          options={options}
          optionLabel="optionLable"
          showClear
          placeholder="Select a Type"
          className="w-full md:w-14rem"
        />
        {/* <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select> */}
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </Card>
  );
};
