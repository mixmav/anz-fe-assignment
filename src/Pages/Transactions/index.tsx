import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import styles from './transactions.module.css';
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => 2),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => 1),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
export const options = {
    responsive: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
const Transactions = () => {
    fetch('/api/sample_data.csv')
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        });
    return (
        <>
            <h1>Transactions</h1>
            <div className={`${styles.chartjsConatiner}`}>
                <Bar data={data} options={options} />
            </div>
        </>
    );
};

export default Transactions;
