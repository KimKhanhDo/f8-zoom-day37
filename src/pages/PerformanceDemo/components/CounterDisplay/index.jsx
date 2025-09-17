import { memo } from 'react';
import styles from './CounterDisplay.module.scss';

function CounterDisplay({ count }) {
    console.log('Counter Display');

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Counter</h2>
            <div className={styles.value}>{count}</div>
        </div>
    );
}

export default memo(CounterDisplay);
