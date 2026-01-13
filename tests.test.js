import { sum } from "./sum.js";
import { capitalize } from "./capitalise.js";
import { reverse } from "./reverse.js";
import { createObject } from "./calculator.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("takes a string and capitalize the first letter", () => {
  expect(capitalize("javascript")).toBe("Javascript");
});

test("take a string and reverse it", () => {
  expect(reverse("hi")).toEqual("ih");
});

test("calculator object returns an object", () => {
  const calc = new createObject();
  expect(typeof calc).toEqual("object");
});

test("calculator objects has basic methods for calculation", () => {
  let calc = new createObject();
  expect(calc).toHaveProperty("add");
  expect(calc).toHaveProperty("subtract");
  expect(calc).toHaveProperty("multiply");
  expect(calc).toHaveProperty("divide");
});

test("that all the methods work",()=>{
  let calc = new createObject()
  expect(calc.add(20,20)).toBe(40)
  
})
