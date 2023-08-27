import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero cta", () => {
  render(<App />);
  const elm = screen.getByText(/Pelajari Lebih Lanjut/i);
  expect(elm).toBeInTheDocument();
});
