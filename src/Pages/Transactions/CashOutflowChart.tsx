import React from 'react';
import { Chart } from 'react-chartjs-2';
import styles from './transactions.module.css';
import { options } from './index';

const CashOutflowChart: React.FC<{ data: any }> = ({ data }) => {
    return (
        <>
            <div className={`${styles.chartConatiner}`}>
                <Chart
                    type="bar"
                    options={options}
                    data={data}
                    fallbackContent={<h1>Hi</h1>}
                ></Chart>
            </div>
        </>
    );
};

export default CashOutflowChart;
