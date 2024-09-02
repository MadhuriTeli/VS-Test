// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const options = [
    { value: "Text", optionLable: "Text" },
    { value: "File", optionLable: "Image" },
  ];

  return (
    <Card title="Output">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />

      <div>
        <label htmlFor="name" className="font-bold block my-2">
          Name:
        </label>
        <InputText type="text" value={currName} onChange={handleNameChange} className="w-full md:w-14rem"/>
      </div>

      <div>
        <label htmlFor="type" className="font-bold block my-2">
          Type:
        </label>
        <Dropdown
          value={outputType}
          onChange={handleTypeChange}
          options={options}
          optionLabel="optionLable"
          showClear
          placeholder="Select a Type"
          className="w-full md:w-14rem"
        />
      </div>
    </Card>
  );
};
