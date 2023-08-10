import { Link } from 'react-router-dom';
import AnzLogo from 'src/Assets/Img/anz-logo.png';
import ProfileMenu from 'src/Layout/Shared/ProfileMenu';
import styles from './navbar.module.css';

let Navbar = () => {
    return (
        <nav className={`${styles.navbar}`} role="navigation">
            <div className={`${styles.navbar__content}`}>
                <div className={`${styles.navbar__item_contentCentered}`}>
                    <Link
                        to="/"
                        className={`${styles.navbar__anzLink}`}
                        aria-label="ANZ Home"
                    >
                        <img
                            className={`${styles.navbar__anzLogo}`}
                            src={AnzLogo}
                            alt="ANZ Logo"
                        />
                    </Link>
                    <span className={`${styles.navbar__tagline}`}>
                        ANZ Institutional Insights
                    </span>
                </div>
                <div>
                    <ProfileMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
