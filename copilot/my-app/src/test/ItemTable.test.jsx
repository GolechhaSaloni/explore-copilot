// write unit tests for the ItemTable component using jest and react-testing-library

import ItemTable from "../components/ItemTable";
import { render, screen } from "@testing-library/react";

jest.mock("../services/itemService");

test("should render ItemTable component", () => {
    render(<ItemTable />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    }
);

test("should render table headers", () => {
    render(<ItemTable />);
    const table = screen.getByRole("table");
    const tableHeader = screen.getByRole("row");
    expect(tableHeader).toBeInTheDocument();
    }
);

test("should render table rows", () => {
    render(<ItemTable />);
    const table = screen.getByRole("table");
    const tableRow = screen.getByRole("row");
    expect(tableRow).toBeInTheDocument();
    }
);

test("should render table data", () => {
    render(<ItemTable />);
    const table = screen.getByRole("table");
    const tableData = screen.getByRole("cell");
    expect(tableData).toBeInTheDocument();
    }
);

test("should render table pagination", () => {
    render(<ItemTable />);
    const tablePagination = screen.getByRole("navigation");
    expect(tablePagination).toBeInTheDocument();
    }
);

test("should render table pagination buttons", () => {
    render(<ItemTable />);
    const tablePagination = screen.getByRole("navigation");
    const tablePaginationButton = screen.getByRole("button");
    expect(tablePaginationButton).toBeInTheDocument();
    }
);

