import React from 'react';
import { ParsedAccountData } from 'src/types/customTypes';

interface CanvasFallbackProps {
    data: ParsedAccountData[] | null;
    account?: string;
    type: 'inflow' | 'outflow' | 'inflow-and-outflow';
}

const CanvasFallback: React.FC<CanvasFallbackProps> = ({
    data,
    type,
    account,
}) => {
    return (
        data && (
            <table
                id={`fallback-table-${type}`}
                aria-label={`Cash ${type} data for ${account}`}
            >
                <caption>{`Cash ${type} data for ${account}`}</caption>
                <thead>
                    <tr>
                        <th scope="col">Month</th>
                        <th scope="col">Cash Inflow 2023</th>
                        <th scope="col">Cash Outflow 2023</th>
                        <th scope="col">Cash Inflow 2022</th>
                        <th scope="col">Cash Outflow 2022</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((account: any, accountIndex: any) => (
                        <React.Fragment key={accountIndex}>
                            {account.months.map(
                                (month: any, monthIndex: any) => (
                                    <tr key={monthIndex}>
                                        <th scope="row">{month}</th>
                                        <td>
                                            {
                                                account.data.cashInflow2023[
                                                    monthIndex
                                                ]
                                            }
                                        </td>
                                        <td>
                                            {
                                                account.data.cashOutflow2023[
                                                    monthIndex
                                                ]
                                            }
                                        </td>
                                        <td>
                                            {
                                                account.data.cashInflow2022[
                                                    monthIndex
                                                ]
                                            }
                                        </td>
                                        <td>
                                            {
                                                account.data.cashOutflow2022[
                                                    monthIndex
                                                ]
                                            }
                                        </td>
                                    </tr>
                                )
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        )
    );
};

export default CanvasFallback;
