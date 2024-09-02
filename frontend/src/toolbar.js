// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const nodes = [
        { type:'customInput', label: 'Input'},
        { type:'llm', label: 'LLM'},
        { type:'customOutput', label: 'Output'},
        { type:'text', label: 'Text'},
        { type:'sample1', label: 'Sample1'},
        { type:'sample2', label: 'Sample2'},
        { type:'sample3', label: 'Sample3'},
        { type:'sample4', label: 'Sample4'},
        { type:'sample5', label: 'Sample5'}
    ];

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                { nodes.map( (node) => {
                     return (
                    <DraggableNode key={node.type} type={node.type} label={node.label} />)
                })}
            </div>
        </div>
    );
};
