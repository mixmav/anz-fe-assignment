import { ChartData, ChartOptions } from 'chart.js';

export const defaultOptions: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            reverse: true,
            position: 'bottom' as const,
        },
    },
};

export const defaultChartData: ChartData = {
    labels: [],
    datasets: [
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: '#3361BB',
            data: [],
            borderColor: '#3361BB',
            borderWidth: 2,
            order: 2,
        },
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: '#494949',
            backgroundColor: '#494949',
            borderWidth: 2,
            data: [],
            order: 1,
        },
    ],
};
