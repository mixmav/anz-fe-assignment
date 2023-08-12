import Papa from 'papaparse';

const parseAndTransformCSV = (csvText: string) => {
    const parsedData: Papa.ParseResult<string[]> = Papa.parse(csvText);

    let accounts: string[][][] = [];
    let currentAccount: string[][] = [];
    // Loop through parsed data
    for (let i = 0; i < parsedData.data.length; i++) {
        let row: string[] = parsedData.data[i];
        // Check for the start of a new account
        if (row[0].startsWith('Account')) {
            if (currentAccount.length > 0) {
                accounts.push(currentAccount);
            }
            currentAccount = [];
        } else {
            if (row[0] !== '') currentAccount.push(row);
        }
    }
    // Push the last account
    if (currentAccount.length > 0) {
        accounts.push(currentAccount);
    }

    // Transpose to convert rows to columns
    let transpose = (matrix: string[][]): string[][] => {
        return matrix[0].map((_: string, colIndex: number) =>
            matrix.map((row: string[]) => row[colIndex])
        );
    };
    const columns = transpose(accounts[0]);

    const months = columns[0].slice(1).slice(0, -1); // Exclude header and account name
    const cashInflow2023 = columns[1].slice(1).slice(0, -1).map(Number); // cast to number;
    const cashOutflow2023 = columns[2].slice(1).slice(0, -1).map(Number);
    const cashInflow2022 = columns[3].slice(1).slice(0, -1).map(Number);
    const cashOutflow2022 = columns[4].slice(1).slice(0, -1).map(Number);

    return {
        months,
        cashInflow2023,
        cashOutflow2023,
        cashInflow2022,
        cashOutflow2022,
    };
};

export default parseAndTransformCSV;
