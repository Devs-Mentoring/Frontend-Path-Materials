import axios from "axios";
import {
  add,
  isNull,
  isUndefined,
  Calculator,
  cloneArray,
  humanFactory,
  getUser,
  pow,
  makeRequest,
} from "./example-functions";

test("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, -2)).toBe(-1);
});
test("shoud clone array", () => {
  // TOBE sorawdza tez referencje w pamięci
  //expect(cloneArray([1,2,3])).toBe([1,2,3]) FAIL
  expect(cloneArray([1, 2, 3])).toEqual([1, 2, 3]);
  // sprawdzamy czy to nie ta referencja
  expect(cloneArray([1, 2, 3])).not.toBe([1, 2, 3]);
});
test("should be null", () => {
  expect(isNull()).toBeNull();
});
test("should be undefined", () => {
  expect(isUndefined()).toBeUndefined();
});
test("should return human object", () => {
  expect(humanFactory("man", "Adam", "Jochemczyk")).toEqual({
    sex: "man",
    firstName: "Adam",
    lastName: "Jochemczyk",
  });
});
//test class methods
test("Test class method", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 1)).toBe(2);

  expect(calculator.divide(2, 2)).toBe(1);

  // test with throw error
  expect(() => {
    calculator.divide(2, 0);
  }).toThrow("Cant divide by 0");
});

test("Test with regex", () => {
  expect("Adam").not.toMatch(/B/);
});

test("Adam should be in array", () => {
  const array = ["john", "adam", "daniel"];
  expect(array).toContain("adam");
});

//test promise function
// test("User fetched email should be Sincere@april.biz", () => {
//   return getUser().then((data) => {
//     expect(data.email).toEqual("Sincere@april.biz");
//   });
// });

//test async function
// test("User fetched email should be Sincere@april.biz", async () => {
//   const data = await getUser();
//   expect(data.email).toEqual("Sincere@april.biz");
// });

//test with mocks
test("Pow with mock", () => {
  const pow = jest.fn((a, b) => a ** b);
  const result = pow(2, 3);
  expect(pow).toHaveBeenCalled();
  expect(pow).toHaveBeenCalledWith(2, 3);
});

jest.mock("axios");

test("Should call and get response", async () => {
    
     const users = [
       { id: 1, name: "John" },
       { id: 2, name: "Andrew" },
     ];
     axios.get.mockResolvedValueOnce(users);

    const result= await makeRequest()

    expect(axios.get).toHaveBeenCalled()
    expect(result).toEqual(users)
});

//before Each beforeEach(()=>console.log("open connection"))
// before all
//afer Each afterEach(()=>console.log("close connection"))
//after all
