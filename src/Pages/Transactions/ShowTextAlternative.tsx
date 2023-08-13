import { useState } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import CanvasFallback from './CanvasFallback';

const ShowTextAlternative = () => {
    const { selectedAccount, parsedAccountData } = useAccountsContext();

    const [canvasFallbackVisible, setCanvasFallbackVisible] = useState(false);
    const handleCanvasFallbackVisibleChange = () => {
        setCanvasFallbackVisible(!canvasFallbackVisible);
    };
    return (
        <>
            {' '}
            <label className={`${componentStyles.checkboxLabel}`}>
                <input
                    checked={canvasFallbackVisible}
                    onChange={handleCanvasFallbackVisibleChange}
                    type="checkbox"
                    aria-checked={canvasFallbackVisible}
                    aria-label="Show text alternative"
                    aria-controls="fallback-table-inflow"
                />
                Show text alternative
            </label>
            {canvasFallbackVisible && (
                <CanvasFallback
                    account={`${
                        selectedAccount === 0
                            ? 'All Accounts'
                            : 'Account ' + selectedAccount
                    }`}
                    type="inflow-and-outflow"
                    data={parsedAccountData}
                />
            )}
        </>
    );
};

export default ShowTextAlternative;
