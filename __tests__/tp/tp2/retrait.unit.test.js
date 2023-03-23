import {
  getWithdrawLimit,
  getWithdrawableAmount,
} from "../../../TP/TP2/retrait.js";

describe("Retrait", function () {
  it.each([
    [100, 200, 300],
    [200, 300, 500],
    [0, 100, 100],
    [-100, 200, 100],
    [-300, 300, 0],
  ])("should return %d + %d and return %d", function (sold, overdraft, result) {
    let withdrawLimit = getWithdrawLimit(sold, overdraft);
    expect(withdrawLimit).toBe(result);
  });

  it.each([
    [100, 200, 100, { sold: 0, accepted: true }],
    [200, 300, 300, { sold: -100, accepted: true }],
    [300, 0, 100, { sold: 200, accepted: true }],
    [300, 300, 600, { sold: -300, accepted: true }],
    [300, 300, 700, { sold: 300, accepted: false }],
  ])(
    "should do (%d + %d) - %d and return the result",
    function (sold, overdraft, amount, result) {
      let withdrawableAmount = getWithdrawableAmount(sold, overdraft, amount);
      expect(withdrawableAmount).toStrictEqual(result);
    }
  );
});
