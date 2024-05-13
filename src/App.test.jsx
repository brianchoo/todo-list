import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "./components/Dropdown";

describe("Dropdown click", () => {
  it("should open a dropdown", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(<Dropdown toggleDropdown={handleClick} />);
    const dropdown = getByTestId("dropdown");

    fireEvent.click(getByTestId("dropdown"));

    expect(dropdown).toBeInTheDocument();
  });
});
