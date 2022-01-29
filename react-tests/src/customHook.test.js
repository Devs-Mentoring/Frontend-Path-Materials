import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useCounter } from "./customHook";

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
  act(() => {
    //wrap actions on hook into acts
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
