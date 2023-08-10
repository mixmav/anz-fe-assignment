import { Outlet } from 'react-router-dom';
import Navbar from 'src/Components/Shared/Navbar';

const Base = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Base;
