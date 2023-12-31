import { useEffect, useState } from 'react';
import { defaultChartData, defaultOptions } from './util/chartDefaults';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import { sumArraysOfArrays } from './util/sumArrayOfArrayst';
import CanvasFallback from './CanvasFallback';

const CashOutflowChart = () => {
    const { selectedAccount, parsedAccountData } = useAccountsContext();
    const [augmentedChartData, setAugmentedChartData] =
        useState(defaultChartData);
    const [augmentedChartOptions, setAugmentedChartOptions] =
        useState(defaultOptions);
    useEffect(() => {
        if (parsedAccountData) {
            const months = parsedAccountData[0].months;
            const years = parsedAccountData[0].years;
            let data: [number[], number[]] = [[], []];
            if (selectedAccount > 0) {
                data = [
                    parsedAccountData[selectedAccount - 1].data
                        .cashOutflowYear1,
                    parsedAccountData[selectedAccount - 1].data
                        .cashOutflowYear2,
                ];
            } else if (selectedAccount === 0) {
                // ALL Accounts combined
                const toAddYear1: number[][] = [];
                const toAddYear2: number[][] = [];
                parsedAccountData.forEach((account) => {
                    toAddYear1.push(account.data.cashOutflowYear1);
                    toAddYear2.push(account.data.cashOutflowYear2);
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
                            label: `Cash Outflow ${years[0]}`,
                            data: data[0],
                            backgroundColor: '#FA7532',
                            borderColor: '#FA7532',
                        },
                        {
                            ...defaultChartData.datasets[1],
                            label: `Cash Outflow ${years[1]}`,
                            data: data[1],
                            borderColor: '#FFBD20',
                            backgroundColor: '#FFBD20',
                        },
                    ],
                };
            });
        }
    }, [parsedAccountData, selectedAccount]);

    useEffect(() => {
        setAugmentedChartOptions(() => {
            return {
                ...defaultOptions,
                scales: {
                    ...defaultOptions.scales,
                    x: {
                        position: 'top' as const,
                    },
                },
            };
        });
    }, []);
    return (
        <section className={`${styles.chartCard}`}>
            <div className={`${styles.chartCard__container}`}>
                <h2 className={`${styles.chartCard__chartTitle}`}>
                    Cash Outflow
                </h2>

                <Chart
                    aria-label={`Cash Outflow Chart for ${
                        selectedAccount === 0
                            ? 'All Accounts'
                            : 'Account ' + selectedAccount
                    }`}
                    type="bar"
                    options={augmentedChartOptions}
                    data={augmentedChartData}
                    fallbackContent={<CanvasFallback type="outflow" />}
                ></Chart>
            </div>
        </section>
    );
};

export default CashOutflowChart;
