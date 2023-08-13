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
} from 'chart.js';

import CashInfowChart from './CashInflowChart';
import CashOutfowChart from './CashOutflowChart';
import { AccountsContextProvider } from 'src/Context/AccountsContext';
import AccountSelector from './AccountSelector';
// import allyLegendPlugin from 'chartjs-plugin-a11y-legend';

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
    // allyLegendPlugin
);

const Transactions = () => {
    return (
        <AccountsContextProvider>
            <section>
                <h1>Transactions</h1>
                <AccountSelector />
                <CashInfowChart />
                <CashOutfowChart />
            </section>
        </AccountsContextProvider>
    );
};

export default Transactions;
