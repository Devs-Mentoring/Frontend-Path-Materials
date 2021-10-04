import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header in app component', () => {
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

test("allow user to add item to list", ()=>{
  render(<App/>);
  const input=screen.getByLabelText("new-todo")
  fireEvent.change(input,{target: {value: 'make tests'}})
  fireEvent.click(screen.getByText("send"))
  screen.getByText("make tests")
})

//test async code
const mockApi=jest.fn();

test("allow user to add item to API",async ()=>{
  render(<App />);
  mockApi.mockResolvedValueOnce({id:123,text:"todo text"})
  
  const input = screen.getByLabelText("new-todo");
  fireEvent.change(input, { target: { value: "make tests" } });
  fireEvent.click(screen.getByText("send"));

  // expect(mockApi).toHaveBeenCalled();
  // expect(mockApi).toHaveBeenCalledWith("make tests");
  
  await screen.getByText("make tests");
})
