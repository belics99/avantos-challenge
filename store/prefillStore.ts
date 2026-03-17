import { create } from "zustand";
import { IPrefillStore } from "@/interfaces";

export const usePrefillStore = create<IPrefillStore>((set) => ({
  mappings: {},

  setMapping: (formId, fieldId, mapping) =>
    set((state) => ({
      mappings: {
        ...state.mappings,
        [formId]: {
          ...(state.mappings[formId] || {}),
          [fieldId]: mapping,
        },
      },
    })),

  clearMapping: (formId, fieldId) =>
    set((state) => {
      const formMappings = { ...(state.mappings[formId] || {}) };
      delete formMappings[fieldId];

      return {
        mappings: {
          ...state.mappings,
          [formId]: formMappings,
        },
      };
    }),
}));
