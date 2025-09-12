import { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './GoToTop.module.scss';

const THRESHOLD = 300;

export default function GoToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            console.log(window.scrollY);
            setVisible(window.scrollY >= THRESHOLD);
        };

        onScroll();
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            type="button"
            className={clsx(styles.goToTop, {
                [styles.active]: visible,
            })}
            onClick={scrollToTop}
        >
            <span className={styles.icon}>↑</span>
        </button>
    );
}
