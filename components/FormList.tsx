"use client";

import { IGraphResponse } from "@/interfaces";
import { Box, List, ListItemButton, Typography } from "@mui/material";
import { FormPrefillEditor } from "./FormPrefillEditor";
import { useFormList } from "@/hooks";

interface IProps {
    graph: IGraphResponse;
}

export function FormList({ graph }: IProps) {
    const {setSelectedNode, selectedNode, selectedNodeForm, forms} = useFormList(graph)

    return (
        <Box display="flex" gap={4} width='50%'>
            <Box minWidth={120} pl={4} borderLeft='solid white 1px'>
                <Typography variant="h6">Forms</Typography>

                <List>
                    {graph.nodes.map((node, index) => (
                        <ListItemButton
                            key={`${node.id}_${index}`}
                            onClick={() => setSelectedNode(node)}
                        >
                            {node.data.name}
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            <Box flex={1} pl={4} borderLeft='solid white 1px'>
                {selectedNode && selectedNodeForm && (
                    <FormPrefillEditor 
                        node={selectedNode} 
                        activeForm={selectedNodeForm} 
                        allForms={forms}
                        edges={graph.edges}
                    />
                )}
            </Box>
        </Box>
    );
}