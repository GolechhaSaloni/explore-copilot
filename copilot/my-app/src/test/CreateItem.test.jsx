// write unit tests for CreateItem component using jest and react-testing-library

import CreateItem from "../components/CreateItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render CreateItem component", () => {
      render(<CreateItem />);
  const createItemButton = screen.getByRole("button", { name: /create item/i });
  expect(createItemButton).toBeInTheDocument();
});

test("should render dropdown menu when create item button is clicked", () => {
  render(<CreateItem />);
  const createItemButton = screen.getByRole("button", { name: /create item/i });
  userEvent.click(createItemButton);
  const importItem = screen.getByText(/import item/i);
  expect(importItem).toBeInTheDocument();
});


// write unit tests for FileUploader component using jest and react-testing-library
test("should render FileUploader component", () => {
  render(<FileUploader />);
  const fileInput = screen.getByLabelText(/upload file/i);
  expect(fileInput).toBeInTheDocument();
});


