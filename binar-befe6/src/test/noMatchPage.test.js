import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import NoMatch from "../pages/NoMatch";
import "@testing-library/jest-dom/extend-expect";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders correct message and has a button to go back to homepage", () => {
  const { getByText } = render(<NoMatch />);
  const errorMessage = screen.getByText(
    "We're Sorry, the page you requested could not be found"
  );
  const errorMessage2 = screen.getByText("Please go back to the Homepage");
  const button = screen.getByText("Back to Homepage");

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("button navigate to homepage when clicked", async () => {
  const { getByText } = render(<NoMatch />);
  const button = screen.getByTestId("navigate-test");
  fireEvent.click(button);
  await waitFor(() => expect(window.location.pathname).toBe("/"));
});
test("renders plane image", () => {
  const { getByAltText } = render(<NoMatch />);
  const image = screen.getByAltText("plane");

  expect(image).toBeInTheDocument();
});

test("button has correct className", () => {
  const { getByText } = render(<NoMatch />);
  const button = screen.getByText("Back to Homepage");

  expect(button).toHaveClass(
    "flex items-center p-5 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
  );
});
