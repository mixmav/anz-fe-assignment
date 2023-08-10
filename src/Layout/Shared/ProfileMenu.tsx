import Dropdown from 'src/Components/Dropdown';
import componentStyles from 'src/Assets/Styles/components.module.css';

let ProfileMenu = () => {
    return (
        <Dropdown
            trigger={
                <button
                    aria-label="Profile menu"
                    className={`${componentStyles.button} ${componentStyles.button_transparent} ${componentStyles.button_focusable}`}
                >
                    <img
                        className={`${componentStyles.avatar}`}
                        src="https://api.dicebear.com/6.x/initials/svg?seed=JD"
                        alt="User avatar"
                    />
                    John Doe
                </button>
            }
            menuItems={[
                <button>Your profile</button>,
                <button>Settings</button>,
                <button>Logout</button>,
            ]}
        />
    );
};

export default ProfileMenu;