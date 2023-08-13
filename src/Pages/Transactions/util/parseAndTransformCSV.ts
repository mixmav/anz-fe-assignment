/*
    Doesn't assume the years that the data is for
    and dynamically parses the years from the CSV file.
*/

import Papa from 'papaparse';
import { ParsedAccountData } from 'src/types/customTypes';

const getYear = (str: string): number | null => {
    const match = str.match(/\b\d{4}\b/);
    return match ? parseInt(match[0]) : null;
};

const extractAccounts = (csvText: string): string[][][] => {
    const parsedData: Papa.ParseResult<string[]> = Papa.parse(csvText);

    let accounts: string[][][] = [];
    let currentAccount: string[][] = [];
    // Loop through parsed data
    if (parsedData.errors.length > 0) {
        throw new Error('Could not parse CSV file.');
    }

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

    return accounts;
};

// Transpose to convert rows into columns
const transpose = (matrix: string[][]): string[][] => {
    return matrix[0].map((_: string, colIndex: number) =>
        matrix.map((row: string[]) => row[colIndex])
    );
};

const parseAndTransformCSV = (csvText: string): ParsedAccountData[] => {
    const accounts = extractAccounts(csvText);

    const year1 = getYear(accounts[0][0][2]);
    const year2 = getYear(accounts[0][0][3]);

    if (!year1 || !year2) {
        throw new Error('Could not parse year from CSV file.');
    }
    const parsedAccounts = [];

    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        const columns = transpose(account);

        const months = columns[0].slice(1).slice(0, -1); // Exclude header and sum
        const cashInflowYear1 = columns[1].slice(1).slice(0, -1).map(Number); // cast to number;
        const cashOutflowYear1 = columns[2].slice(1).slice(0, -1).map(Number);
        const cashInflowYear2 = columns[3].slice(1).slice(0, -1).map(Number);
        const cashOutflowYear2 = columns[4].slice(1).slice(0, -1).map(Number);

        parsedAccounts.push({
            months: months,
            years: [year1, year2].sort((a, b) => b - a), // Sort in descending order
            data: {
                [`cashInflow${year1}`]: cashInflowYear1,
                [`cashOutflow${year1}`]: cashOutflowYear1,
                [`cashInflow${year2}`]: cashInflowYear2,
                [`cashOutflow${year2}`]: cashOutflowYear2,
            },
        });
    }
    return parsedAccounts;
};

export default parseAndTransformCSV;
