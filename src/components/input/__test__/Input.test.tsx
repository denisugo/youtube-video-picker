import { render, screen } from "@testing-library/react";
import Input from "../Input";

test("renders learn react link", () => {
  render(<Input />);

  const linkInput = screen.getByPlaceholderText(/Paste/i);
});
