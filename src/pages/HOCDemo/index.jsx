import { useState } from 'react';

import styles from './HOCDemo.module.scss';
import UserProfile from '@/components/UserProfile';
import ProductList from '@/components/ProductList';

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    console.log('HOC demo');

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>HOC Demo</h2>
            <p className={styles.sub}>HOC Pattern - withLoading.</p>

            <section className={styles.section}>
                <button
                    className={styles.button}
                    onClick={() => setUserLoading(!userLoading)}
                >
                    Toggle Loading State
                </button>
                <UserProfile isLoading={userLoading} />
            </section>

            <section className={styles.section}>
                <button
                    className={styles.button}
                    onClick={() => setProductLoading(!productLoading)}
                >
                    Toggle Loading State
                </button>
                <ProductList isLoading={productLoading} />
            </section>
        </div>
    );
}

export default HOCDemo;
