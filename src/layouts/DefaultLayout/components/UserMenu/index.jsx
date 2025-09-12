import { useEffect, useState } from 'react';

import styles from './UserMenu.module.scss';
import UserDropDown from './components/UserDropDown';
import appLogo from '../../../../assets/images/f8-logo.png';

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeDropDown = (e) => {
            const userMenu = document.getElementById('user-menu');

            if (userMenu && !userMenu.contains(e.target)) setIsOpen(false);
        };

        document.addEventListener('click', closeDropDown);

        return () => document.removeEventListener('click', closeDropDown);
    }, []);

    return (
        <div
            id="user-menu"
            className={styles.wrapper}
        >
            <button
                type="button"
                className={styles.userMenu}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={styles.avatarWrap}>
                    <img
                        className={styles.userMenu__avatar}
                        src={appLogo}
                        alt="Avatar"
                    />
                    <span className={styles.crown} />
                </span>
            </button>

            {/* Dropdown */}
            {isOpen && <UserDropDown />}
        </div>
    );
}
