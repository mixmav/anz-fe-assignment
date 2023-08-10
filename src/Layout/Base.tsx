import { Outlet } from 'react-router-dom';
import Navbar from 'src/Layout/Shared/Navbar';
import styles from './base.module.css';
import componentStyles from 'src/Assets/Styles/components.module.css';
import { Icon } from '@iconify/react';
const Base = () => {
    return (
        <>
            <Navbar />
            <div className={styles.baseContainer}>
                <nav
                    className={`${componentStyles.menu} ${componentStyles.menu_primary} ${componentStyles.menu_bold} ${componentStyles.menu_xl}`}
                >
                    <ul>
                        <li>
                            <button className={`${componentStyles.menu__item}`}>
                                <Icon icon="fa-solid:home" />
                                Summary
                            </button>
                        </li>
                        <li>
                            <button className={`${componentStyles.menu__item}`}>
                                <Icon icon="fa6-solid:heart-pulse" />
                                Financials
                            </button>
                        </li>
                        <li>
                            <button className={`${componentStyles.menu__item}`}>
                                <Icon icon="fa6-solid:scale-balanced" />
                                Balances
                            </button>
                        </li>
                        <li>
                            <button
                                className={`${componentStyles.menu__item} ${componentStyles.menu__item_active}`}
                            >
                                <Icon icon="fa6-solid:right-left" />
                                Transactions
                            </button>
                        </li>
                    </ul>
                </nav>

                <main className={`${styles.baseContainer__main}`}>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Base;
