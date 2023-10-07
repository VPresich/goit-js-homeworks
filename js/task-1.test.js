import makeTransaction from "./task-1.js";
test("makeTransaction testing ", () => {
  expect(makeTransaction(5, 3000)).toBe(
    "You ordered 5 droids worth 15000 credits!"
  );
  expect(makeTransaction(3, 1000)).toBe(
    "You ordered 3 droids worth 3000 credits!"
  );
  expect(makeTransaction(10, 500)).toBe(
    "You ordered 10 droids worth 5000 credits!"
  );
});
