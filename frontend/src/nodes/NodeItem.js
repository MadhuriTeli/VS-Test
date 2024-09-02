// NodeItem.js
import React from 'react';
import AbstractNode from './AbstractNode';

const NodeItem = React.memo(({ id, type,renderDataContent  }) => {
  return <AbstractNode id={id} type={type}
  renderDataContent={renderDataContent} />;
});

export default NodeItem;