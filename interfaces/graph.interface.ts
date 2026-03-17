export interface IFormFieldView {
  id: string;
  label: string;
  type: string;
}

export interface IFormNode {
  id: string;
  name: string;
  componentId: string;
  fields: IFormFieldView[];
}

export interface IFormField {
  type: string;
  title: string;
  avantos_type: string;
}

export interface IFieldSchema {
  type: string;
  properties: Record<string, IFormField>;
}

export interface IGraphEdge {
  id: string;
  source: string;
  target: string;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface INodeData {
  component_id: string;
  name: string;
  prerequisites: string[];
}

export interface IGraphNode {
  id: string;
  type: string;
  data: INodeData;
  position: IPosition;
}

export interface IFormDefinition {
  id: string;
  name: string;
  description: string;
  is_reusable: boolean;
  field_schema: IFieldSchema;
  ui_schema: {
    type?: string;
    "ui:order": string[];
  };
  dynamic_field_config: Record<string, unknown>;
}

export interface IGraphResponse {
  nodes: IGraphNode[];
  edges: IGraphEdge[];
  forms: IFormDefinition[];
}
