import { logic } from "./logic.module.ts";
import { divide, sum, multiply } from "./math.functions.ts";

const nextCollatz = (number: number) => {
    if(logic.isEven(number)) {
        return divide(number, 2);
    } else {
        return sum(multiply(number, 3), 1);
    }
}

function isTerminated(number: number): boolean {
    return number === 1;
}


export const collatzSequence = (number: number): number[] => {
    const sequence: number[] = [];
    do {
        sequence.push(number);
        number = nextCollatz(number);
    } while(!isTerminated(number));
    sequence.push(number);
    return sequence;
}
