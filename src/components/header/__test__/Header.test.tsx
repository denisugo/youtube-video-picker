import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders learn react link", () => {
  render(<Header />);
  const headerText = screen.getByText(/Welcome to my app/i);
});
