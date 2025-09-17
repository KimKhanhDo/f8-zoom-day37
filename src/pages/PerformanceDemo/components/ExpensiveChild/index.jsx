import { memo } from 'react';
import styles from './ExpensiveChild.module.scss';

function ExpensiveChild({ items }) {
    console.log('Expensive Child');

    return (
        <>
            <div className={styles.header}>
                <h3 className={styles.title}>Expensive Child</h3>
                <p className={styles.sub}>Danh sách users: {items.length}</p>
            </div>

            <ul className={styles.list}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={styles.item}
                    >
                        <div className={styles.avatar} />
                        <div className={styles.meta}>
                            <span
                                className={styles.name}
                                title={item.name}
                            >
                                {item.name}
                            </span>
                            <span
                                className={styles.email}
                                title={item.email}
                            >
                                {item.email}
                            </span>
                        </div>
                    </li>
                ))}
                {items.length === 0 && (
                    <li className={`${styles.item} ${styles.empty}`}>
                        <div className={styles.avatar} />
                        <div className={styles.meta}>
                            <span className={styles.name}>No data</span>
                            <span className={styles.email}>—</span>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
}

export default memo(ExpensiveChild);
