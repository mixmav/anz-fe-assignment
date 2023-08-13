import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title,
    LineController,
    BarController,
    ChartData,
    ChartOptions,
} from 'chart.js';

import parseAndTransformCSV from './parseAndTransformCSV';
import { useEffect, useState } from 'react';
import CashInflowChart from './CashInflowChart';
import CashOutflowChart from './CashOutflowChart';

import componentStyles from 'src/Assets/Styles/components.module.css';
import utilityStyles from 'src/Assets/Styles/utility.module.css';
import styles from './transactions.module.css';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title,
    LineController,
    BarController
);

export const defaultOptions: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            reverse: true,
        },
    },
};
const defaultChartData: ChartData = {
    labels: [],
    datasets: [
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: '#3361BB',
            data: [],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: '#494949',
            backgroundColor: '#494949',
            borderWidth: 2,
            data: [],
        },
    ],
};
const Transactions = () => {
    const [inflowData, setInflowData] = useState<ChartData | null>(null);
    const [outflowData, setOutflowData] = useState<ChartData | null>(null);

    useEffect(() => {
        fetch('/api/sample_data.csv')
            .then((response) => response.text())
            .then((csvText) => {
                const {
                    months,
                    cashInflow2023,
                    cashInflow2022,
                    cashOutflow2022,
                    cashOutflow2023,
                } = parseAndTransformCSV(csvText);

                setInflowData(() => ({
                    ...defaultChartData,
                    labels: months,
                    datasets: [
                        {
                            ...defaultChartData.datasets[0],
                            label: 'Cash Inflow 2023',
                            data: cashInflow2023,
                            order: 2,
                        },
                        {
                            ...defaultChartData.datasets[1],
                            label: 'Cash Inflow 2022',
                            data: cashInflow2022,
                            order: 1,
                        },
                    ],
                }));
                setOutflowData(() => ({
                    ...defaultChartData,
                    labels: months,
                    datasets: [
                        {
                            ...defaultChartData.datasets[0],
                            label: 'Cash Inflow 2023',
                            data: cashOutflow2023,
                            order: 2,
                        },
                        {
                            ...defaultChartData.datasets[1],
                            label: 'Cash Inflow 2022',
                            data: cashOutflow2022,
                            order: 1,
                        },
                    ],
                }));
            })
            .catch((error) => {
                console.error('Error fetching or parsing CSV:', error);
            });
    }, []);
    return (
        <>
            <h1>Transactions</h1>

            <label
                className={`${componentStyles.formLabel} ${styles.accountSelect}`}
            >
                <span className={`${utilityStyles.screenReaderOnly}`}>
                    Select an account
                </span>
                <select
                    defaultValue="0"
                    className={`${componentStyles.formSelect}`}
                >
                    <option value="0">All Accounts</option>
                    <option value="1">Account 1</option>
                    <option value="2">Account 2</option>
                </select>
            </label>
            {inflowData !== null && <CashInflowChart data={inflowData} />}
            {outflowData !== null && <CashOutflowChart data={outflowData} />}
        </>
    );
};

export default Transactions;
