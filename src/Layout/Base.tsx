import { Outlet } from 'react-router-dom';
import Navbar from 'src/Layout/Shared/Navbar';
import styles from './base.module.css';

const Base = () => {
    return (
        <>
            <Navbar />
            <div className={styles.baseLayout__content}>
                <Outlet />
            </div>
        </>
    );
};

export default Base;
