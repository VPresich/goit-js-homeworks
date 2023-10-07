import getShippingMessage from "./task-2.js";
test("getShippingMessage testing ", () => {
  expect(getShippingMessage("Australia", 120, 50)).toBe(
    "Shipping to Australia will cost 170 credits"
  );
  expect(getShippingMessage("Germany", 80, 20)).toBe(
    "Shipping to Germany will cost 100 credits"
  );
  expect(getShippingMessage("Sweden", 100, 20)).toBe(
    "Shipping to Sweden will cost 120 credits"
  );
});
