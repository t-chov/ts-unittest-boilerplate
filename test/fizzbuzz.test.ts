import fizzbuzz from "../src/fizzbuzz";

describe("FizzBuzz", () => {
  test("should return 1, 2, Fizz...", () => {
    const expected = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
    ];
    const actual = fizzbuzz(16);
    expect(actual).toEqual(expected);
  });
});
