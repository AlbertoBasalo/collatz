import { collatzSequence } from "./collatz.logic.ts";

main();

function main() {
    const number = 19;
    const sequence = collatzSequence(number);
    for(const item of sequence) {
        console.log(item.toString());
    }
}

