import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';

import CashInfowChart from './CashInflowChart';
import CashOutfowChart from './CashOutflowChart';
import ShowTextAlternative from './ShowTextAlternative';
import { AccountsContextProvider } from 'src/Context/AccountsContext';
import AccountSelector from './AccountSelector';
import { customCanvasBackgroundColor } from './util/chartDefaults';
// import allyLegendPlugin from 'chartjs-plugin-a11y-legend';
// Doesn't work with mixed charts unfortunately, will submit a
// PR to the repo to fix this.

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    customCanvasBackgroundColor,
    Tooltip,
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
                <ShowTextAlternative />
            </section>
        </AccountsContextProvider>
    );
};

export default Transactions;
