import { Link } from 'react-router-dom';
import AnzLogo from 'src/Assets/Img/anz-logo.png';
import styles from './navbar.module.css';
import Dropdown from 'src/Components/Dropdown';
import componentStyles from 'src/Assets/Styles/components.module.css';

let Navbar = () => {
    return (
        <nav className={`${styles.navbar}`} role="navigation">
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
                <Dropdown
                    trigger={
                        <button
                            aria-label="Profile menu"
                            className={`${componentStyles.button}`}
                        >
                            <img
                                className={`${styles.navbar__userAvatar}`}
                                src="https://api.dicebear.com/6.x/bottts/jpg"
                                alt="User avatar"
                            />
                            John Doe
                        </button>
                    }
                    menuItems={[
                        <button>Profile</button>,
                        <button>Logout</button>,
                    ]}
                />
            </div>
        </nav>
    );
};

export default Navbar;
