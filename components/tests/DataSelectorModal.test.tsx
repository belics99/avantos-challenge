import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IDataSource } from "@/interfaces";
import DataSelectorModal from "../DataSelectorModal";

describe("DataSelectorModal", () => {
  const createSource = (id: string, label: string, fields: {id: string, label: string}[]): IDataSource => ({
    id,
    label,
    getFields: () => fields,
  } as IDataSource);

  const user = userEvent.setup();
  const onSelect = jest.fn();
  const onClose = jest.fn();

  const sources: IDataSource[] = [
    createSource("source1", "Source One", [
      { id: "field1", label: "Field 1" },
      { id: "field2", label: "Field 2" },
    ]),
    createSource("source2", "Source Two", [
      { id: "fieldA", label: "Field A" },
    ]),
  ];

  const renderModal = () => {
    render(<DataSelectorModal open={true} sources={sources} onSelect={onSelect} onClose={onClose} />);
  }

  it("renders dialog when open is true", () => {
    renderModal()
    expect(screen.getByText("Select data element")).toBeInTheDocument();
    expect(screen.getByText("Source One")).toBeInTheDocument();
    expect(screen.getByText("Source Two")).toBeInTheDocument();
  });

  it("calls onSelect when field is clicked", async () => {
    renderModal()

    const fieldButton1 = screen.getByText("Source One");
    await user.click(fieldButton1);
    const fieldButton2 = screen.getByText("Field 1");
    await user.click(fieldButton2);

    expect(onSelect).toHaveBeenCalledWith({
      sourceFieldId: "field1",
      sourceNodeId: "source1",
      sourceName: "Source One",
    });
  });

  it("calls onClose when dialog is closed", async () => {
    renderModal()
    
    const closeButton = screen.getByLabelText("close");
    await user.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});