import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './Notification.module.scss';
import DropDownNotifications from './components/DropDownNotifications';

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeNotification = (e) => {
            const notification = document.getElementById('notification');

            if (notification && !notification.contains(e.target))
                setIsOpen(false);
        };

        document.addEventListener('click', closeNotification);

        return () => document.removeEventListener('click', closeNotification);
    }, []);

    return (
        <div
            id="notification"
            className={styles.wrapper}
        >
            <button
                type="button"
                className={styles.notify}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <FontAwesomeIcon
                    icon={faBell}
                    className={styles.notify__icon}
                />
                <span className={styles.notify__badge}>3</span>
            </button>

            {/* Dropdown */}
            {isOpen && <DropDownNotifications />}
        </div>
    );
}

export default Notification;
