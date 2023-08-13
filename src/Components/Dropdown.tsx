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
    items: ReactNode[];
    role?: string;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    items,
    role,
    className,
}) => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(items.length);

    const accessibleTrigger = cloneElement(trigger, {
        role: 'button',
        ...buttonProps,
    });

    return (
        <div
            className={`${styles.dropdown} ${
                isOpen ? styles.dropdown_visible : ''
            } ${className}`}
        >
            {accessibleTrigger}
            <div
                className={`${styles.dropdown__menu} ${componentStyles.menu} ${componentStyles.menu_bold}`}
                role={role ? role : 'menu'}
            >
                <ul>
                    {items.map((item, i) => {
                        const accessibleItem = cloneElement(
                            items[i] as ReactElement,
                            {
                                ...itemProps[i],
                                className: `${componentStyles.menu__item}`,
                            }
                        );

                        return <li key={i}>{accessibleItem}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
