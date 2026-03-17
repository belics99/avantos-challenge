import { IPrefillMapping } from "./prefill.interface";

export type TPrefillStoreMapping = Record<
  string,
  Record<string, IPrefillMapping>
>;

export interface IPrefillStore {
  mappings: TPrefillStoreMapping;
  setMapping: (
    formId: string,
    fieldId: string,
    mapping: IPrefillMapping,
  ) => void;
  clearMapping: (formId: string, fieldId: string) => void;
}
