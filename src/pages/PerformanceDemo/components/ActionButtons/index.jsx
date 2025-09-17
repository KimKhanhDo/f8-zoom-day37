import { memo } from 'react';
import clsx from 'clsx';

import styles from './ActionButtons.module.scss';

function ActionButtons({ onIncrement, onReset }) {
    console.log('Action Buttons');

    return (
        <div className={styles.wrap}>
            <div className={styles.group}>
                <button
                    type="button"
                    className={clsx(styles.btn, styles.primary)}
                    onClick={onIncrement}
                >
                    Increment
                </button>
                <button
                    type="button"
                    className={clsx(styles.btn, styles.neutral)}
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default memo(ActionButtons);
