import React, { useEffect, useState } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import { ParsedAccountData } from 'src/types/customTypes';
import { sumArraysOfArrays } from './util/sumArrayOfArrayst';

interface CanvasFallbackProps {
    type: 'inflow' | 'outflow' | 'inflow-and-outflow';
}

const CanvasFallback: React.FC<CanvasFallbackProps> = ({ type }) => {
    const { selectedAccount, parsedAccountData } = useAccountsContext();
    const [accountName, setAccountName] = useState<string>();
    const [tableData, setTableData] = useState<ParsedAccountData | null>();

    useEffect(() => {
        if (selectedAccount === 0) {
            setAccountName('All Accounts');
        } else {
            setAccountName(`Account ${selectedAccount}`);
        }
    }, [selectedAccount]);

    useEffect(() => {
        if (parsedAccountData) {
            const months = parsedAccountData[0].months;
            const years = parsedAccountData[0].years;
            let data: [number[], number[], number[], number[]] = [
                [],
                [],
                [],
                [],
            ];
            if (selectedAccount > 0) {
                data = [
                    parsedAccountData[selectedAccount - 1].data.cashInflowYear1,
                    parsedAccountData[selectedAccount - 1].data.cashInflowYear2,
                    parsedAccountData[selectedAccount - 1].data
                        .cashOutflowYear1,
                    parsedAccountData[selectedAccount - 1].data
                        .cashOutflowYear2,
                ];
            } else if (selectedAccount === 0) {
                const toAddInflowYear1: number[][] = [];
                const toAddInflowYear2: number[][] = [];
                const toAddOutflowYear1: number[][] = [];
                const toAddOutflowYear2: number[][] = [];

                parsedAccountData.forEach((account) => {
                    toAddInflowYear1.push(account.data.cashInflowYear1);
                    toAddInflowYear2.push(account.data.cashInflowYear2);
                    toAddOutflowYear1.push(account.data.cashOutflowYear1);
                    toAddOutflowYear2.push(account.data.cashOutflowYear2);
                });

                data = [
                    sumArraysOfArrays(toAddInflowYear1),
                    sumArraysOfArrays(toAddInflowYear2),
                    sumArraysOfArrays(toAddOutflowYear1),
                    sumArraysOfArrays(toAddOutflowYear2),
                ];
            }
            setTableData(() => {
                return {
                    months: months,
                    years: years,
                    data: {
                        cashInflowYear1: data[0],
                        cashInflowYear2: data[1],
                        cashOutflowYear1: data[2],
                        cashOutflowYear2: data[3],
                    },
                };
            });
        }
    }, [parsedAccountData, selectedAccount]);

    return (
        parsedAccountData && (
            <table
                className={`${componentStyles.table} ${componentStyles.table_centered}`}
                id={`fallback-table-${type}`}
                aria-label={`Cash ${type} data for ${accountName}`}
            >
                <caption>{`Cash ${type} data for ${accountName}`}</caption>
                <thead>
                    <tr>
                        <th scope="col">Month</th>

                        {type.includes('inflow') && (
                            <>
                                <th scope="col">Cash Inflow 2023</th>
                                <th scope="col">Cash Inflow 2022</th>
                            </>
                        )}
                        {type.includes('outflow') && (
                            <>
                                <th scope="col">Cash Outflow 2023</th>
                                <th scope="col">Cash Outflow 2022</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <>
                        {tableData &&
                            tableData.months.map(
                                (month: string, monthIndex: number) => (
                                    <tr key={monthIndex}>
                                        <th scope="row">{month}</th>
                                        {type.includes('inflow') && (
                                            <>
                                                <td>
                                                    {
                                                        tableData.data
                                                            .cashInflowYear1[
                                                            monthIndex
                                                        ]
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        tableData.data
                                                            .cashInflowYear2[
                                                            monthIndex
                                                        ]
                                                    }
                                                </td>
                                            </>
                                        )}
                                        {type.includes('outflow') && (
                                            <>
                                                <td>
                                                    {
                                                        tableData.data
                                                            .cashOutflowYear1[
                                                            monthIndex
                                                        ]
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        tableData.data
                                                            .cashOutflowYear2[
                                                            monthIndex
                                                        ]
                                                    }
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                )
                            )}
                    </>
                </tbody>
            </table>
        )
    );
};

export default CanvasFallback;
