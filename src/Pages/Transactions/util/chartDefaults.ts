import { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
export const defaultOptions: ChartOptions = {
    responsive: true,
    scales: {
        y: {
            grace: '5%',
        },
    },
    plugins: {
        legend: {
            reverse: true,
            position: 'bottom' as const,
            labels: {
                font: {
                    size: 10,
                    weight: '600',
                    family: 'Noto Sans Vithkuqi',
                },
            },
        },
        customCanvasBackgroundColor: {
            // This is a custom plugin for accessibility
            color: '#ffffff',
        },
    },
};

export const defaultChartData: ChartData = {
    labels: [],
    datasets: [
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            borderColor: '#3361BB',
            backgroundColor: '#3361BB',
            borderWidth: 2,
            data: [],
            order: 2,
        },
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: '#9B9B9B',
            backgroundColor: '#9B9B9B',
            borderWidth: 2,
            data: [],
            order: 1,
        },
    ],
};

export const customCanvasBackgroundColor = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: ChartJS, args: any, options: any) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    },
};
