import { Link } from 'react-router-dom';
import styles from './AppLogo.module.scss';
import appLogo from '@/assets/images/f8-logo.png';

function AppLogo() {
    return (
        <h1 className={styles.appLogo}>
            <Link
                to="/"
                className={styles.brandLink}
            >
                <img
                    className={styles.brandIcon}
                    src={appLogo}
                    alt="Học Lập Trình Để Đi Làm"
                />
            </Link>
            <Link
                to="/"
                className={styles.brandName}
            >
                Học Lập Trình Để Đi Làm
            </Link>
        </h1>
    );
}

export default AppLogo;
