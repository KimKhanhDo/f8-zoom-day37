import { Outlet } from 'react-router-dom';

import styles from './PageLayout.module.scss';
import Header from '@/layouts/components/Header';
import Sidebar from '@/layouts/components/Sidebar';

function PageLayout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Sidebar />

            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default PageLayout;
