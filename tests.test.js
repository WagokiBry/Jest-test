import {sum} from './sum.js';
import { capitalize } from './capitalise.js';
import {reverse} from './reverse.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("takes a string and capitalize the first letter",()=>{
  expect(capitalize("javascript")).toBe("Javascript")
})

test("take a string and reverse it",()=>{
  expect(reverse("hi").toBe("ih"))
})