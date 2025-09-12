import { Link } from 'react-router-dom';
import styles from './AppLogo.module.scss';

function AppLogo() {
    return (
        <h1 className={styles.appLogo}>
            <Link
                to="/"
                className={styles.brandLink}
            >
                <img
                    className={styles.brandIcon}
                    src="/src/assets/images/f8-logo.png"
                    alt="Học Lập Trình Để Đi Làm"
                />
            </Link>
            <a className={styles.brandName}>Học Lập Trình Để Đi Làm</a>
        </h1>
    );
}

export default AppLogo;
