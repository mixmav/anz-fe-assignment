import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

import styles from './app_layout.module.css';
import componentStyles from 'src/Components/Styles/components.module.css';

const AppLayout = () => {
    return (
        <>
            <MainHeader />
            <div className={styles.appLayout}>
                <nav
                    className={`${componentStyles.menu} ${componentStyles.menu_primary} ${componentStyles.menu_bold} ${componentStyles.menu_xl}`}
                >
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${componentStyles.menu__item} ${
                                        isActive
                                            ? componentStyles.menu__item_active
                                            : ''
                                    }`
                                }
                            >
                                <Icon icon="fa-solid:home" />
                                Summary
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${componentStyles.menu__item} ${
                                        isActive
                                            ? componentStyles.menu__item_active
                                            : ''
                                    }`
                                }
                            >
                                <Icon icon="fa6-solid:heart-pulse" />
                                Financials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${componentStyles.menu__item} ${
                                        isActive
                                            ? componentStyles.menu__item_active
                                            : ''
                                    }`
                                }
                            >
                                <Icon icon="fa6-solid:scale-balanced" />
                                Balances
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/transactions"
                                className={({ isActive }) =>
                                    `${componentStyles.menu__item} ${
                                        isActive
                                            ? componentStyles.menu__item_active
                                            : ''
                                    }`
                                }
                            >
                                <Icon icon="fa6-solid:right-left" />
                                Transactions
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <main className={`${styles.appLayout__main}`}>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default AppLayout;
