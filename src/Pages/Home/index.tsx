import Dropdown from 'src/Components/Dropdown';
import componentStyles from 'src/Assets/Styles/components.module.css';
import styles from './home.module.css';

const App = () => {
    return (
        <>
            <h1>Home page</h1>
            <div className={`${styles.dropdownContainer}`}>
                <Dropdown
                    trigger={
                        <button className={`${componentStyles.button}`}>
                            Test
                        </button>
                    }
                    menuItems={[<button>Test</button>, <button>Test2</button>]}
                />
            </div>
        </>
    );
};

export default App;
