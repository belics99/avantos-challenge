import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PrefillFieldRow } from "../PrefillFieldRow";
import { IFormFieldView, TPrefillStoreMapping } from "@/interfaces";

describe("PrefillFieldRow", () => {
    const field: IFormFieldView = { id: "field1", label: "Field 1", type: "string" };
    const nodeId = "node1";
    const user = userEvent.setup();
    const onOpenSelector = jest.fn();
    const onClear = jest.fn();

    const renderComponent = (props: {mappings: TPrefillStoreMapping | null}) => {
    
        render(
            <PrefillFieldRow
                field={field}
                nodeId={nodeId}
                mappings={props.mappings}
                onClear={onClear}
                onOpenSelector={onOpenSelector}
            />
        );
  }

  it("renders label and 'Select data' when no mapping", () => {
    renderComponent({mappings: null})

    expect(screen.getByText("Field 1")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Select data" })).toBeInTheDocument();
    
    expect(screen.queryByLabelText("close")).toBeNull();
  });

  it("renders button with mapping label if mapping exists", () => {
    const mappings = {
      [nodeId]: {
        [field.id]: {
          sourceFieldId: "sourceField",
          sourceNodeId: "sourceNode",
          sourceName: "SourceName",
        },
      },
    };

    renderComponent({mappings})

    expect(screen.getByRole("button", { name: "SourceName.sourceField" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("calls onOpenSelector when button is clicked", async () => {
    renderComponent({mappings: null})

    const button = screen.getByRole("button", { name: "Select data" });
    await user.click(button);

    expect(onOpenSelector).toHaveBeenCalledWith(field.id);
  });

  it("calls onClear when CloseIcon is clicked", async () => {
    const mappings = {
      [nodeId]: {
        [field.id]: {
          sourceFieldId: "sourceField",
          sourceNodeId: "sourceNode",
          sourceName: "SourceName",
        },
      },
    };

    renderComponent({mappings})

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(onClear).toHaveBeenCalledWith(nodeId, field.id);
  });
});