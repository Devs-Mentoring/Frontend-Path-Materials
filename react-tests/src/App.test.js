import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders header in app component", () => {
  render(<App />);
  const header = screen.getByText(/TODOs/i);
  expect(header).toBeInTheDocument();
});

test("renders form with label in app component", () => {
  render(<App />);
  const label = screen.getByText(/What/i);
  expect(label).toBeInTheDocument();
});

test("renders form with submit button in app component", () => {
  render(<App />);
  expect(screen.getByText(/send/i)).toBeInTheDocument();
});

test("allow user to add item to list", async () => {
  render(<App />);
  const input = screen.getByLabelText("new-todo");
  //await and waitFor to wait for rerender
  await waitFor(()=>fireEvent.change(input, { target: { value: "make tests" } }));
  await waitFor(()=>fireEvent.click(screen.getByText("send")));
  expect(screen.queryByText(/make tests/i)).toBeInTheDocument()
});
