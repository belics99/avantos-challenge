import { FormDataSource, GlobalDataSource } from "@/datasources";
import { IDataSource, IFormNode, IGraphEdge } from "@/interfaces";
import { usePrefillStore } from "@/store";
import { getUpstreamForms } from "@/utils";
import { useState } from "react";

interface IProps {
  activeForm: IFormNode;
  allForms: IFormNode[];
  edges: IGraphEdge[];
}

export const useFormPrefillEditor = ({
  edges,
  activeForm,
  allForms,
}: IProps) => {
  const { mappings, setMapping, clearMapping } = usePrefillStore();
  const [activeField, setActiveField] = useState<string | null>(null);
  const [sources, setSources] = useState<IDataSource[]>([]);

  function onSetActiveField(field: string) {
    const upstreamIds = getUpstreamForms(activeForm.id, edges);

    const getFormDataById = (id: string): IFormNode => {
      return allForms.find((form) => form.id === id)!;
    };

    const dataSources = [
      new GlobalDataSource(),
      ...upstreamIds.map((id) => new FormDataSource(getFormDataById(id))),
    ];

    setSources(dataSources);
    setActiveField(field);
  }

  function clearActiveFields() {
    setActiveField(null);
  }

  return {
    onSetActiveField,
    clearActiveFields,
    mappings,
    setMapping,
    clearMapping,
    activeField,
    sources,
  };
};
