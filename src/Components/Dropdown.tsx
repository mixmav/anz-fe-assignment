/**
 * Accessible dropdown menu
 * Author: Manav Gadhoke
 * * Uses react-accessible-dropdown-menu-hook
 * * to handle menu and trigger accessibility attributes and state
 */

import { ReactElement, ReactNode, cloneElement } from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import styles from './dropdown.module.css';
import componentStyles from 'src/Assets/Styles/components.module.css';

interface DropdownProps {
    trigger: ReactElement<HTMLElement>;
    menuItems: ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, menuItems }) => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(
        menuItems.length
    );

    const accessibleTrigger = cloneElement(trigger, {
        role: 'button',
        ...buttonProps,
    });

    return (
        <div
            className={`${styles.dropdown} ${
                isOpen ? styles.dropdown_visible : ''
            }`}
        >
            {accessibleTrigger}
            <nav
                className={`${styles.dropdown__menu} ${componentStyles.menu} ${componentStyles.menu_bold}`}
                role="menu"
            >
                <ul>
                    {menuItems.map((item, i) => {
                        const accessibleItem = cloneElement(
                            menuItems[i] as ReactElement,
                            {
                                ...itemProps[i],
                                className: `${componentStyles.menu__item}`,
                            }
                        );

                        return <li key={i}>{accessibleItem}</li>;
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown;
