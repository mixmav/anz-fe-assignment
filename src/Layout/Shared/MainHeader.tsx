import { Link } from 'react-router-dom';
import AnzLogo from 'src/Assets/Img/anz-logo.png';
import ProfileMenu from 'src/Layout/Shared/ProfileMenu';
import styles from './main_header.module.css';

const MainHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.header__content}`}>
                <div className={`${styles.header__item_contentCentered}`}>
                    <Link
                        to="/"
                        className={`${styles.header__anzLink}`}
                        aria-label="ANZ Home"
                    >
                        <img
                            className={`${styles.header__anzLogo}`}
                            src={AnzLogo}
                            alt="ANZ Logo"
                        />
                    </Link>
                    <span className={`${styles.header__tagline}`}>
                        ANZ Institutional Insights
                    </span>
                </div>
                <div>
                    <ProfileMenu />
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
