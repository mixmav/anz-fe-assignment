import { Outlet } from 'react-router-dom';
import Navbar from 'src/Layout/Shared/Navbar';
import styles from './base.module.css';
import componentStyles from 'src/Assets/Styles/components.module.css';

const Base = () => {
    return (
        <>
            <Navbar />
            <div className={styles.baseContainer}>
                <nav className={`${componentStyles.menu}`}>
                    <button>This is a menu button</button>
                    <button>This is a menu button</button>
                    <button>This is a menu button</button>
                    <button>This is a menu button</button>
                </nav>

                <main className={`${styles.baseContainer__main}`}>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Base;
