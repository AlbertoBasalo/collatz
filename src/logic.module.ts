export const logic = {
    isEven: (number: number) => {
        return number % 2 === 0;
    },
    isOdd: (number: number) => {
        return number % 2 !== 0;
    },
    isNatural: (number: number) => {
        return number > 0;
    }
}
