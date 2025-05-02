import { collatzFunctions } from "./collatz.functions.ts";

main();

function main() {
  try {
    const number = 19;
    const sequence = collatzFunctions.getSequenceFor(number);
    for (const item of sequence) {
      console.log(item.toString());
    }
  }
  catch (error) {
    console.error("Error:", error.message);
  }
}

