import { useEffect, useState } from 'react';
import { defaultChartData, defaultOptions } from './util/chartDefaults';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import { sumArraysOfArrays } from './util/sumArrayOfArrayst';

const CashInflowChart = () => {
    const { selectedAccount, parsedAccountData } = useAccountsContext();
    const [augmentedChartData, setAugmentedChartData] =
        useState(defaultChartData);

    useEffect(() => {
        if (parsedAccountData) {
            const months = parsedAccountData[0].months;
            const years = parsedAccountData[0].years;
            let data: [number[], number[]] = [[], []];
            if (selectedAccount > 0) {
                const allData = parsedAccountData[selectedAccount - 1].data;
                data = [
                    allData[`cashInflow${years[0]}`],
                    allData[`cashInflow${years[1]}`],
                ];
            } else if (selectedAccount === 0) {
                // ALL Accounts combined
                const toAddYear1: number[][] = [];
                const toAddYear2: number[][] = [];
                parsedAccountData.forEach((account) => {
                    toAddYear1.push(
                        account.data[`cashInflow${account.years[0]}`]
                    );
                    toAddYear2.push(
                        account.data[`cashInflow${account.years[1]}`]
                    );
                });
                data = [
                    sumArraysOfArrays(toAddYear1),
                    sumArraysOfArrays(toAddYear2),
                ];
            }
            setAugmentedChartData(() => {
                return {
                    ...defaultChartData,
                    labels: months,
                    datasets: [
                        {
                            ...defaultChartData.datasets[0],
                            label: `Cash Inflow ${years[0]}`,
                            data: data[0],
                        },
                        {
                            ...defaultChartData.datasets[1],
                            label: `Cash Inflow ${years[1]}`,
                            data: data[1],
                        },
                    ],
                };
            });
        }
    }, [parsedAccountData, selectedAccount]);
    return (
        <section className={`${styles.chartCard}`}>
            <h2 className={`${styles.chartCard__chartTitle}`}>Cash Inflow</h2>
            <Chart
                type="bar"
                options={defaultOptions}
                data={augmentedChartData}
                fallbackContent={<h1>Hi</h1>}
            ></Chart>
        </section>
    );
};

export default CashInflowChart;
