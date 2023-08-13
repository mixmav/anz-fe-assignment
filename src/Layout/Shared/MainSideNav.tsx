import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import componentStyles from 'src/Assets/Styles/components.module.css';
import Dropdown from 'src/Components/Dropdown';
import styles from './Styles/main_side_nav.module.css';

const routes = [
    {
        path: '/',
        name: 'Summary',
        icon: 'fa-solid:home',
    },
    {
        path: '/',
        name: 'Financials',
        icon: 'fa6-solid:heart-pulse',
    },
    {
        path: '/',
        name: 'Balances',
        icon: 'fa6-solid:scale-balanced',
    },
    {
        path: '/transactions',
        name: 'Transactions',
        icon: 'fa6-solid:right-left',
    },
];

const MainSideNav = () => {
    return (
        <>
            <Dropdown
                className={`${styles.mobileNavDropdown}`}
                role="navigation"
                trigger={
                    <button
                        aria-label="Site navigation menu"
                        className={`${componentStyles.button} ${componentStyles.button_primary} ${componentStyles.button_expandable}`}
                    >
                        Menu
                        <Icon icon="fa-solid:angle-down" />
                    </button>
                }
                items={routes.map((route) => (
                    <NavLink to={route.path}>
                        <Icon icon={route.icon} />
                        {route.name}
                    </NavLink>
                ))}
            />
            <nav
                className={`${styles.mainSideNav} ${componentStyles.menu} ${componentStyles.menu_primary} ${componentStyles.menu_bold} ${componentStyles.menu_xl}`}
            >
                <ul>
                    {routes.map((route) => (
                        <li key={route.name}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    `${componentStyles.menu__item} ${
                                        isActive
                                            ? componentStyles.menu__item_active
                                            : ''
                                    }`
                                }
                            >
                                <Icon icon={route.icon} />
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MainSideNav;
