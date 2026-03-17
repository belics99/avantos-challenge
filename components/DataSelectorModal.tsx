"use client"

import CloseIcon from "@mui/icons-material/Close"
import { IDataSource, IPrefillMapping } from "@/interfaces"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from "@mui/material"
import {
  SimpleTreeView,
  TreeItem
} from "@mui/x-tree-view"

interface IProps {
  open: boolean,
  sources: IDataSource[],
  onSelect(mapping: IPrefillMapping): void,
  onClose(): void
}

export default function DataSelectorModal({
  open,
  sources,
  onSelect,
  onClose
}: IProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        Select data element
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <SimpleTreeView >

          {sources.map((source) => (
            <TreeItem
              key={source.id}
              itemId={source.id}
              label={source.label}
            >

              {source.getFields().map((field) => (
                <TreeItem
                  key={field.id}
                  itemId={`${source.id}.${field.id}`}
                  label={field.label}
                  onClick={() =>
                    onSelect({
                      sourceFieldId: field.id, 
                      sourceNodeId: source.id,
                      sourceName: source.label
                    })
                  }
                />
              ))}

            </TreeItem>
          ))}

        </SimpleTreeView >
      </DialogContent>
    </Dialog>
  )
}