/*
    Forked from https://gist.github.com/GeorgeArgyrousis/a184d202575ee0cd1c9c873dfc708700
    Skip link for screen readers and keyboard users
    Implemented in React to prevent SEO issues
    read - (https://levelup.gitconnected.com/build-an-accessible-skip-to-content-anchor-link-with-react-140903f3bd7e)
*/

import React from 'react';
import styles from './Styles/skip_to_content_link.module.css';
import componentStyles from 'src/Assets/Styles/components.module.css';

interface SkipToContentLinkProps {
    children: React.ReactElement;
}

const SkipToContentLink: React.FC<SkipToContentLinkProps> = (props) => {
    const onClick = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const container: HTMLElement | null =
            document.querySelector('main:first-of-type');

        if (container) {
            container.tabIndex = -1;
            container.focus();
            setTimeout(() => container.removeAttribute('tabindex'), 1000);
        }
    };

    return React.cloneElement(props.children, {
        onClick,
        className: `${styles.skipToContentLink} ${componentStyles.button} ${componentStyles.button_primary}`,
    });
};

export default SkipToContentLink;
