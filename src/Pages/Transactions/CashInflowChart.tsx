import React, { useEffect, useState } from 'react';
import { defaultChartData, defaultOptions } from './util/chartDefaults';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';

const CashOutflowChart = () => {
    const { selectedAccount, parsedAccountData } = useAccountsContext();
    const [augmentedChartData, setAugmentedChartData] =
        useState(defaultChartData);

    useEffect(() => {
        if (parsedAccountData && selectedAccount > 0) {
            const months = parsedAccountData[selectedAccount - 1].months;
            const years = parsedAccountData[selectedAccount - 1].years;
            const data = parsedAccountData[selectedAccount - 1].data;
            setAugmentedChartData(() => {
                return {
                    ...defaultChartData,
                    labels: months,
                    datasets: [
                        {
                            ...defaultChartData.datasets[0],
                            label: `Cash Outflow ${years[0]}`,
                            data: data[`cashInflow${years[0]}`],
                            // backgroundColor: '#FA7532',
                            // borderColor: '#FA7532',
                        },
                        {
                            ...defaultChartData.datasets[1],
                            label: `Cash Outflow ${years[1]}`,
                            data: data[`cashInflow${years[1]}`],
                            // borderColor: '#FFBD20',
                            // backgroundColor: '#FFBD20',
                        },
                    ],
                };
            });
        }
    }, [parsedAccountData, selectedAccount]);
    return (
        <>
            <div className={`${styles.chartCard}`}>
                <Chart
                    type="bar"
                    options={defaultOptions}
                    data={augmentedChartData}
                    fallbackContent={<h1>Hi</h1>}
                ></Chart>
            </div>
        </>
    );
};

export default CashOutflowChart;
