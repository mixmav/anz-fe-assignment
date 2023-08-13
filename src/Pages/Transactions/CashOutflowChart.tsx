import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { ChartData } from 'chart.js';
// import { ParsedAccountData } from 'src/types/customTypes';
import { useAccountsContext } from 'src/Context/AccountsContext';

const CashOutflowChart = () => {
    const {
        selectedAccount,
        parsedAccountData,
        setSelectedAccount,
        setParsedAccountData,
    } = useAccountsContext();
    const [augmentedChartData, setAugmentedChartData] = useState({});
    // useEffect(() => {
    //     setAugmentedChartData(() => {
    //         return {
    //             ...data,
    //             datasets: [
    //                 {
    //                     ...data.datasets[0],
    //                     label: 'Cash Outflow 2023',
    //                     backgroundColor: '#FA7532',
    //                     borderColor: '#FA7532',
    //                 },
    //                 {
    //                     ...data.datasets[1],
    //                     label: 'Cash Outflow 2022',
    //                     borderColor: '#FFBD20',
    //                     backgroundColor: '#FFBD20',
    //                 },
    //             ],
    //         };
    //     });
    // }, [data]);
    return (
        <>
            {/* <div className={`${styles.chartCard}`}>
                <Chart
                    type="bar"
                    options={defaultOptions}
                    data={augmentedChartData}
                    fallbackContent={<h1>Hi</h1>}
                ></Chart>
            </div> */}
            {/* <h1>Hello!!!!!! {selectedAccount}</h1> */}
        </>
    );
};

export default CashOutflowChart;
