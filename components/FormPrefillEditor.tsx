"use client";

import { IGraphNode, IFormNode, IGraphEdge } from "@/interfaces";
import { Box, Typography } from "@mui/material";
import { PrefillFieldRow } from "./PrefillFieldRow";
import DataSelectorModal from "./DataSelectorModal";
import { useFormPrefillEditor } from "@/hooks";

interface IProps {
    node: IGraphNode;
    activeForm: IFormNode
    allForms: IFormNode[]
    edges: IGraphEdge[]
}

export function FormPrefillEditor({ node, activeForm, allForms, edges}: IProps) {
    const {
        clearMapping, 
        mappings, 
        setMapping, 
        sources, 
        onSetActiveField,
        activeField,
        clearActiveFields
    } = useFormPrefillEditor({activeForm, allForms, edges})

    return (<>
        <Box>
            <Typography variant="h6">
                Prefill configuration for {node.data.name}
            </Typography>

            {activeForm.fields.map((field) => (
                <PrefillFieldRow 
                    key={field.id} 
                    nodeId={node.id}
                    field={field}
                    onClear={clearMapping} 
                    mappings={mappings}
                    onOpenSelector={onSetActiveField}
                />
            ))}
        </Box>
        <DataSelectorModal
            open={!!activeField}
            onClose={clearActiveFields}
            onSelect={(mapping) => {
                if (activeField) {
                    setMapping(node.id, activeField, mapping);
                }
                clearActiveFields();
            }}
            sources={sources}
        />
    </>
    );
}