import { useEffect, useState } from 'react';
import { defaultChartData, defaultOptions } from './util/chartDefaults';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import { sumArraysOfArrays } from './util/sumArrayOfArrayst';
import CanvasFallback from './CanvasFallback';
// import utilityStyles from 'src/Assets/Styles/utility.module.css';
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
                data = [
                    parsedAccountData[selectedAccount - 1].data.cashInflowYear1,
                    parsedAccountData[selectedAccount - 1].data.cashInflowYear2,
                ];
            } else if (selectedAccount === 0) {
                // ALL Accounts combined
                const toAddYear1: number[][] = [];
                const toAddYear2: number[][] = [];
                parsedAccountData.forEach((account) => {
                    toAddYear1.push(account.data.cashInflowYear1);
                    toAddYear2.push(account.data.cashInflowYear2);
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
            <div className={`${styles.chartCard__container}`}>
                <h2 className={`${styles.chartCard__chartTitle}`}>
                    Cash Inflow
                </h2>
                <Chart
                    aria-label={`Cash Inflow Chart for ${
                        selectedAccount === 0
                            ? 'All Accounts'
                            : 'Account ' + selectedAccount
                    }`}
                    type="bar"
                    options={defaultOptions}
                    data={augmentedChartData}
                    fallbackContent={<CanvasFallback type="inflow" />}
                ></Chart>
            </div>
        </section>
    );
};

export default CashInflowChart;
