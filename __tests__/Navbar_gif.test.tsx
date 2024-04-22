import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// Import @testing-library/jest-dom for additional matchers
import '@testing-library/jest-dom';
import Navbar from "../src/app/Components/Navbar/Navbar";  

test("Navbar renders the image and the title correctly", () => {
  render(<Navbar />);

  // Test if the image is present with the correct attributes
  const image = screen.getByAltText("Moving Soccer Ball");
  expect(image).toBeDefined();
  expect(image).toHaveAttribute("src", "/TitleSoccer.gif");
  expect(image).toHaveAttribute("width", "50");
  expect(image).toHaveAttribute("height", "50");
  expect(image).toHaveStyle("margin-right: 10px");

  // Test if the span with the title is present
  const span = screen.getByText("Flagrant Fowl Futbol Association");
  expect(span).toBeDefined();
});
