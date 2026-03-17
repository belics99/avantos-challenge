import { IFormNode, IGraphNode, IGraphResponse } from "@/interfaces";
import { buildFormDefinitionMap } from "@/utils/buildFormDefinitionMap";
import { getFormFields } from "@/utils/getFormFields";
import { useState } from "react";

export const useFormList = (graph: IGraphResponse) => {
  const [selectedNode, setSelectedNode] = useState<IGraphNode | null>(null);
  const formDefinitions = buildFormDefinitionMap(graph.forms);

  const forms: IFormNode[] = graph.nodes.map((node) => {
    const definition = formDefinitions[node.data.component_id];
    return {
      id: node.id,
      name: node.data.name,
      fields: getFormFields(definition),
      componentId: node.data.component_id,
    };
  });
  const selectedNodeForm: IFormNode | null =
    forms.find((form) => form.id === selectedNode?.id) ?? null;

  return {
    selectedNodeForm,
    selectedNode,
    setSelectedNode,
    forms,
  };
};
