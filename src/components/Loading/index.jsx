import styles from './Loading.module.scss';

export default function Loading({ text = 'Loading...' }) {
    return (
        <div className={styles.loadingRoot}>
            <div className={styles.spinner} />
            <span className={styles.loadingText}>{text}</span>
        </div>
    );
}
