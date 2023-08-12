import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { defaultOptions } from './index';
import { ChartData } from 'chart.js';

const CashOutflowChart: React.FC<{ data: ChartData }> = ({ data }) => {
    const [augmentedChartData, setAugmentedChartData] = useState(data);
    useEffect(() => {
        setAugmentedChartData(() => {
            return {
                ...data,
                datasets: [
                    {
                        ...data.datasets[0],
                        label: 'Cash Outflow 2023',
                        backgroundColor: '#FA7532',
                    },
                    {
                        ...data.datasets[1],
                        label: 'Cash Outflow 2022',
                        borderColor: '#FFBD20',
                        backgroundColor: '#FFBD20',
                    },
                ],
            };
        });
    }, [data]);
    console.log('Augmented Chart Data:', augmentedChartData);
    return (
        <>
            <div className={`${styles.chartConatiner}`}>
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
