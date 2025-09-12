import { Outlet } from 'react-router-dom';

import styles from './DefaultLayout.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function DefaultLayout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Sidebar />

            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
