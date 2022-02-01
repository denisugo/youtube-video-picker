import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("renders learn react link", () => {
  render(<Button />);

  screen.getByRole("button");
});
