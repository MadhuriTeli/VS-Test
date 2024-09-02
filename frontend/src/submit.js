// submit.js

import { Button } from 'primereact/button';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
        
export const SubmitButton = () => {
    const {
        nodes,
        edges,
      } = useStore();


      const handleSubmit = async () => {
        try {
          // Prepare the data to be sent
          const data = {
            nodes: nodes,   // Replace with actual nodes data
            edges: edges,   // Replace with actual edges data
          };
    
          // Send data to the backend using fetch
          const response = await fetch('/pipelines/parse', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert the data to JSON format
          });
    
          if (!response.ok) {
            throw new Error('Failed to submit pipeline data.');
          }
    
          // Handle response (if any)
          const result = await response.json();
          console.log('Pipeline submitted successfully:', result);
        } catch (error) {
          console.error('Error submitting pipeline:', error);
        }
      };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}
