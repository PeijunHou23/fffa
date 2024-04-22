import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Page from "../src/app/page";  

test("Navbar renders the image and the title correctly", () => {
  render(<Page />);

  // Test if the image is present with the correct attributes
  const image = screen.getByAltText("Moving Soccer Ball");
  expect(image).toBeDefined();
  expect(image).toHaveAttribute("src", "/MoveSoccer.gif");
  expect(image).toHaveAttribute("width", "100");
  expect(image).toHaveAttribute("height", "100");

  // Test if the span with the title is present
  const span = screen.getByText("Flagrant Fowl Futbol Association");
  expect(span).toBeDefined();
});
