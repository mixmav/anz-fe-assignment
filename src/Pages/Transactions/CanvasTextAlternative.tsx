import { useState } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import CanvasFallback from './CanvasFallback';
import styles from './transactions.module.css';
const CanvasTextAlternative = () => {
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
                <div className={`${styles.canvasTextAlternative}`}>
                    <CanvasFallback type="inflow-and-outflow" />
                </div>
            )}
        </>
    );
};

export default CanvasTextAlternative;
