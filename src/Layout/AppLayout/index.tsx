import { Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

import MainHeader from 'src/Layout/Shared/MainHeader';
import SkipToContentLink from 'src/Layout/Shared/SkipToContentLink';
// import ProfileMenu from 'src/Layout/Shared/ProfileMenu';
import styles from './app_layout.module.css';
import componentStyles from 'src/Assets/Styles/components.module.css';

const AppLayout = () => {
    return (
        <>
            <SkipToContentLink>
                <button type="button">Skip to main content</button>
            </SkipToContentLink>
            <MainHeader />
            <div className={styles.appLayout}>
                <nav
                    className={`${styles.appLayout__mainSideNav} ${componentStyles.menu} ${componentStyles.menu_primary} ${componentStyles.menu_bold} ${componentStyles.menu_xl}`}
                >
                    {/* <ProfileMenu /> */}
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

                <div className={`${styles.appLayout__mainContainer}`}>
                    <main className={`${styles.appLayout__main}`}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
