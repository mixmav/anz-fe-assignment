import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom';

import Base from 'src/Layout/Base';
import Transactions from 'src/Pages/Transactions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Base />}>
            <Route path="/" element={<Transactions />} />
        </Route>
    )
);

export default router;
