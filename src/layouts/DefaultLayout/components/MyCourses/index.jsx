import { useEffect, useState } from 'react';

import styles from './MyCourses.module.scss';
import DropDownCourses from './components/DropDownCourses';

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeDropDown = (e) => {
            const course = document.querySelector('#myCourses');

            if (course && !course.contains(e.target)) setIsOpen(false);
        };

        document.addEventListener('click', closeDropDown);

        return () => document.removeEventListener('click', closeDropDown);
    }, [isOpen]);

    return (
        <div
            id="myCourses"
            className={styles.wrapper}
        >
            <button
                className={styles.myCourses}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={styles.myCourses__text}>Khóa học của tôi</span>
            </button>

            {/* Dropdown */}
            {isOpen && <DropDownCourses />}
        </div>
    );
}

export default MyCourses;
