import { forwardRef } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

const CustomNavLink = forwardRef<
    HTMLAnchorElement,
    { to: string; title: string }
>(({ to, title }, ref) => {
    /**
     * Needed to resolve the path to match the current location
     * when the NavLink is rendered inside a Dropdown
     */
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavLink
            to={to}
            className={`${componentStyles.menu__item} ${
                match ? componentStyles.menu__item_active : ''
            }`}
        >
            {title}
        </NavLink>
    );
});

export default CustomNavLink;
