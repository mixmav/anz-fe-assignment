import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom';

import Base from 'src/Layout/Base';
import Home from 'src/Pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Base />}>
            <Route path="/" element={<Home />} />
        </Route>
    )
);

export default router;
