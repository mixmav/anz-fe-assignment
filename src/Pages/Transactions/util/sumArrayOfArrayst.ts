/*
    Expects an array of arrays of numbers and
    returns theur corresponding sum as an array of numbers

    !! Expects all arrays to be of the same length
*/

export const sumArraysOfArrays = (arrays: number[][]): number[] => {
    if (arrays.length === 0) {
        return [];
    }

    const result: number[] = [];

    for (let i = 0; i < arrays[0].length; i++) {
        const sum: number = arrays.reduce((accumulator, current) => {
            return accumulator + current[i];
        }, 0);
        result.push(sum);
    }

    return result;
};
