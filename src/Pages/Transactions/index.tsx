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

export const options: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            reverse: true,
        },
    },
};
const Transactions = () => {
    const [data, setData] = useState<ChartData>({
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
                borderWidth: 2,
                fill: false,
                data: [],
            },
        ],
    });

    useEffect(() => {
        fetch('/api/sample_data.csv')
            .then((response) => response.text())
            .then((csvText) => {
                const { months, cashInflow2023, cashInflow2022 } =
                    parseAndTransformCSV(csvText);

                setData((prev) => ({
                    ...prev,
                    labels: months,
                    datasets: [
                        {
                            ...prev.datasets[0],
                            label: 'Cash Inflow 2023',
                            data: cashInflow2023,
                            order: 2,
                        },
                        {
                            ...prev.datasets[1],
                            label: 'Cash Inflow 2022',
                            data: cashInflow2022,
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
            <CashInflowChart data={data} />
            <CashOutflowChart data={data} />
        </>
    );
};

export default Transactions;
