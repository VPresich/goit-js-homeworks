import getElementWidth from "./task-3.js";
test("getElementWidth testing ", () => {
  expect(getElementWidth("50px", "8px", "4px")).toBe(74);
  expect(getElementWidth("60px", "12px", "8.5px")).toBe(101);
  expect(getElementWidth("200px", "0px", "0px")).toBe(200);
});
