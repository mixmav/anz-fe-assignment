import { Outlet } from 'react-router-dom';

import MainHeader from 'src/Layout/Shared/MainHeader';
import SkipToContentLink from 'src/Layout/Shared/SkipToContentLink';
import MainSideNav from 'src/Layout/Shared/MainSideNav';
// import ProfileMenu from 'src/Layout/Shared/ProfileMenu';
import styles from './app_layout.module.css';

const AppLayout = () => {
    return (
        <>
            <SkipToContentLink>
                <button type="button">Skip to main content</button>
            </SkipToContentLink>
            <MainHeader />
            <div className={styles.appLayout}>
                <MainSideNav />
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
