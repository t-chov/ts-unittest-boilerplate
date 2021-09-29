export default function fizzbuzz(limit: number): Array<string> {
  return [...Array(limit)].map((_, i: number) => {
    i++;
    if (i % 15 == 0) {
      return "FizzBuzz";
    } else if (i % 3 == 0) {
      return "Fizz";
    } else if (i % 5 == 0) {
      return "Buzz";
    } else {
      return i.toString();
    }
  });
}
