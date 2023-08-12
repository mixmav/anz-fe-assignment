import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom';

import AppLayout from 'src/Layout/AppLayout';
import Transactions from 'src/Pages/Transactions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route path="/" element={<Transactions />} />
        </Route>
    )
);

export default router;
