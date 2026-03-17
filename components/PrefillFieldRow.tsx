import { Box, IconButton, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { IFormFieldView, TPrefillStoreMapping } from "@/interfaces"
import React from 'react'

interface IProps {
    field: IFormFieldView, 
    nodeId: string
    mappings: TPrefillStoreMapping | null
    onClear(nodeId: string, fieldId: string): void
    onOpenSelector(fieldId: string): void
}


export function PrefillFieldRow({ field, nodeId, mappings, onClear, onOpenSelector }: IProps) {    
    const mapping = mappings?.[nodeId]?.[field.id] || null
    const label = mapping
        ? `${mapping.sourceName}.${mapping.sourceFieldId}`
        : "Select data"

    return (
        <Box display="flex" alignItems="center" gap={2} mb={1} pt={1}>
            <Box width={200}>{field.label}</Box>
            <Button onClick={()=>onOpenSelector(field.id)} variant="contained">{label}</Button>
            {mapping && (
                <IconButton onClick={()=>onClear(nodeId, field.id)} aria-label="close">
                    <CloseIcon />
                </IconButton>
            )}            
        </Box>
    )
}