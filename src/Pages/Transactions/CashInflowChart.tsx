import React from 'react';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { defaultOptions } from './index';
import { ChartData } from 'chart.js';

const CashInflowChart: React.FC<{ data: ChartData }> = ({ data }) => {
    return (
        <>
            <div className={`${styles.chartCard}`}>
                <Chart
                    type="bar"
                    options={defaultOptions}
                    data={data}
                    fallbackContent={<h1>Hi</h1>}
                ></Chart>
            </div>
        </>
    );
};

export default CashInflowChart;
