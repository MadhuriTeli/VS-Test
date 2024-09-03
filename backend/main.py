from fastapi import FastAPI, Form
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import deque, defaultdict

app = FastAPI()

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]
    width: float
    height: float

class Edge(BaseModel):
    source: str
    target: str
    sourceHandle: str
    targetHandle: str
    type: str
    animated: bool
    markerEnd: Dict[str, Any]
    id: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get('/pipelines')
def read_root():
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    return {'status': 'parsed'}


@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    nodes = data.nodes
    edges = data.edges

    # Create an adjacency list and in-degree count for topological sorting
    adjacency_list = defaultdict(list)
    in_degree = {node.id: 0 for node in nodes}

    # Build the adjacency list and calculate in-degrees
    for edge in edges:
        from_node = edge.source
        to_node = edge.target
        adjacency_list[from_node].append(to_node)
        in_degree[to_node] += 1

    # Function to check if the graph is a DAG using Kahn's Algorithm
    def is_dag_kahn():
        # Initialize a queue with nodes that have no incoming edges
        queue = deque([node_id for node_id in in_degree if in_degree[node_id] == 0])
        topo_sort = []

        while queue:
            current = queue.popleft()
            topo_sort.append(current)

            # For all outgoing edges from the current node
            for neighbor in adjacency_list[current]:
                in_degree[neighbor] -= 1  # Decrease the in-degree of the neighboring node
                if in_degree[neighbor] == 0:  # If in-degree becomes zero, add it to the queue
                    queue.append(neighbor)

        # If topological sort contains all nodes, the graph is a DAG
        return len(topo_sort) == len(nodes)

    is_dag_result = is_dag_kahn()
 
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag_result
    }