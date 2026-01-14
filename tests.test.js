// import { sum } from "./sum.js";
// import { capitalize } from "./capitalise.js";
// import { reverse } from "./reverse.js";
// import { createObject } from "./calculator.js";
// import{ analyseObject } from "./analyseArray.js";
// import {caesarCipher} from "./caesarCipher.js"

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("takes a string and capitalize the first letter", () => {
//   expect(capitalize("javascript")).toBe("Javascript");
// });

// test("take a string and reverse it", () => {
//   expect(reverse("hi")).toEqual("ih");
// });

// test("calculator object returns an object", () => {
//   const calc = new createObject();
//   expect(typeof calc).toEqual("object");
// });

// test("calculator objects has basic methods for calculation", () => {
//   let calc = new createObject();
//   expect(calc).toHaveProperty("add");
//   expect(calc).toHaveProperty("subtract");
//   expect(calc).toHaveProperty("multiply");
//   expect(calc).toHaveProperty("divide");
// });

// test("that all the methods work",()=>{
//   let calc = new createObject()
//   expect(calc.add(20,20)).toBe(40);
//   expect(calc.subtract(20,20)).toBe(0);
//   expect(calc.multiply(20,20)).toBe(400)
//   expect(calc.divide(20,20)).toBe(1)
// })

// test("does the function return an object",()=>{
//   let analyzedArray = new analyseObject([1,8,3,4,2,6])
//   expect(typeof analyzedArray).toBe("object")
// })

// test("returns average in an object",()=>{
//   let analyzedArray = new analyseObject([1,8,3,4,2,6])
//   expect(analyzedArray).toHaveProperty("average");
//   })

//   test("returns the min value",()=>{
//     let analysedArray = new analyseObject([1,8,3,4,2,6])
//     expect(analysedArray).toHaveProperty("min");
//     expect(analysedArray.min).toBe(1);

//   })

//   test("returns the max value",()=>{
//     let analysedArray = new analyseObject([1,8,3,4,2,6])
//     expect(analysedArray).toHaveProperty("max");
//     expect(analysedArray.max).toBe(8);

//   })

//   test("returns the length of the array",()=>{
//     let analysedArray = new analyseObject([1,8,3,4,2,6])
//     expect(analysedArray).toHaveProperty("length");
//     expect(analysedArray.length).toBe(6);

//   })

//   test("shifts lowercase by a given number",()=>{
// expect(caesarCipher("abc", 1)).toBe("bcd");
// })

//    test("wrapping from z-a",()=>{
// expect(caesarCipher("xyz", 3)).toBe("abc")
//  })
 

//   const mockFn = jest.fn(()=>{return 5});
// console.log(mockFn());
// console.log(mockFn());
// console.log(mockFn());

// let mockFn = jest.fn().mockReturnValue(2000).mockReturnValueOnce(3000).mockReturnValueOnce(4000);
// console.log(mockFn())
// console.log(mockFn())
// console.log(mockFn.mock.calls)

import { logMessage } from "./logger.js";  
import { getUsername } from "./service";

jest.mock("./api.js",()=>({
  fetchUser : jest.fn()
}))

test("whether returned value to uppercase",()=>{
  fetchUser.mockReturnValue("john")
  expect(getUsername()).toBe("JOHN")
})