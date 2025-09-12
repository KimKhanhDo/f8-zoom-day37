import AppLogo from '../AppLogo';
import SearchForm from '../SearchForm';
import MyCourses from '../MyCourses';
import Notification from '../Notification';
import UserMenu from '../UserMenu';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <AppLogo />
                <SearchForm />

                {/* Right */}
                <div className={styles.header__actions}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
