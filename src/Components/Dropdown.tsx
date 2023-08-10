/**
 * Accessible dropdown menu
 * * Using (react-accessible-dropdown-menu-hook)
 * * Which handles menu and trigger accessibility attributes
 */

import { ReactElement, ReactNode, cloneElement } from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import styles from './dropdown.module.css';

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
        <div className={`${styles.dropdown}`}>
            {accessibleTrigger}
            <div
                className={`${styles.dropdown__dropdownMenu} ${
                    isOpen ? styles.dropdown__dropdownMenu_visible : ''
                }`}
                role="menu"
            >
                {menuItems.map((item, i) => {
                    const accessibleItem = cloneElement(
                        menuItems[i] as ReactElement,
                        {
                            key: i,
                            ...itemProps[i],
                            className: styles.dropdown__dropdownMenuItem,
                        }
                    );

                    return accessibleItem;
                })}
            </div>
        </div>
    );
};

export default Dropdown;
