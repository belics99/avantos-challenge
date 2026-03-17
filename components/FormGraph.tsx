'use client'

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { IGraphResponse } from "@/interfaces";
import { FormNode } from "./FormNode";
import { Box, Typography } from "@mui/material";

const nodeTypes = {
    FORM: FormNode
};

interface IProps {
    graph: IGraphResponse;
}

export function FormGraph({ graph }: IProps) {

    const nodes = graph.nodes.map((node, index) => ({
        id: node.id,
        type: "FORM",
        position: node.position,
        data: {
            name: node.data.name,
            component_id: node.data.component_id
        }
    }));

    const edges = graph.edges.map((edge, index) => ({
        id: `${edge.id}_${index}`,
        source: edge.source,
        target: edge.target,
        animated: false
    }));

    return (
        <Box width='50%' height="500px">
            <Typography variant="h6">DAG Preview</Typography>
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
                <Background />
                <Controls />
            </ReactFlow>
        </Box>
    );
}