import { calculateAgios } from "../../../TP/TP2/agios.js";

describe("Retrait", function () {
  it.each([
    [50, 35, 0.48],
    [100, 365, 10],
  ])("should do %d * %d * rate", function (overdraft, day, result) {
    let agios = calculateAgios(overdraft, day);
    expect(agios).toBe(result);
  });
});
