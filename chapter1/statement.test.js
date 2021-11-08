const { statement } = require("./statement");
const invoices = require("./invoices.json");
const plays = require("./plays.json");

it("renders correctly", () => {
  const txt = statement(invoices, plays);
  expect(txt).toMatchSnapshot();
});
