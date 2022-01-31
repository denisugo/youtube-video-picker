import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("renders learn react link", () => {
  render(<Button text="Some text" />);

  const findButton = screen.getByRole("button", { name: /Some text/i });
});
