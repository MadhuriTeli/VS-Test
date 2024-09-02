// NodeCreation.js
import React from "react";
import NodeItem from './NodeItem';

const NodeCreation = ({ id , type}) => {

  const renderDataContent1 = () => {
    return (
      <>
          <span>This is a Sample1Node.</span>
      </>
    );
  };
  const renderDataContent2 = () => {
    return (
      <>
          <span>Sample2Node</span>
      </>
    );
  };

  const renderDataContent3 = () => {
    return (
      <>
          <span>Sample3Node</span>
      </>
    );
  };

  const renderDataContent4 = () => {
    return (
      <>
          <span>Sample4Node</span>
      </>
    );
  };

  const renderDataContent5 = () => {
    return (
      <>
          <span>Sample5Node</span>
      </>
    );
  };

  const getNode = (type) => {
    switch (type) {
      case "Sample1":
        return renderDataContent1;
      case "Sample2":
        return renderDataContent2;
      case "Sample3":
        return renderDataContent3;
      case "Sample4":
        return renderDataContent4;
      case "Sample5":
        return renderDataContent5;
      default:
        return null;
    }
  };

  return (
    <div className="node-app">
            <NodeItem
              id={id}
              type={type}
              renderDataContent={getNode(type)}
            />
    </div>
  );
};



export default NodeCreation;
