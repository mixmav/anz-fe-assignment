import { useState } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import CanvasFallback from './CanvasFallback';

const CanvasTextAlternative = () => {
    const { selectedAccount } = useAccountsContext();

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
                    aria-controls="fallback-table-inflow-and-outflow"
                />
                Show text alternative
            </label>
            {canvasFallbackVisible && (
                <CanvasFallback type="inflow-and-outflow" />
            )}
        </>
    );
};

export default CanvasTextAlternative;
