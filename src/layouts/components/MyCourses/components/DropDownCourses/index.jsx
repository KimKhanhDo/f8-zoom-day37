import styles from './DropDownCourses.module.scss';

const COURSES = [
    {
        title: 'Fullstack Web',
        subtitle: 'Học cách đây một ngày trước',
        progress: 82,
    },
    {
        title: 'Javascript Pro',
        subtitle: 'Học cách đây một ngày trước',
        progress: 100,
    },
];

export default function DropDownCourses() {
    return (
        <div className={styles.dropdown}>
            <button className={styles.header}>
                <h6 className={styles.title}>Khóa học của tôi</h6>
                <a
                    href="#"
                    className={styles.viewAll}
                    onClick={(e) => e.preventDefault()}
                >
                    Xem tất cả
                </a>
            </button>

            <ul className={styles.list}>
                {COURSES.map((course, i) => (
                    <li key={i}>
                        <a
                            href="/"
                            className={styles.item}
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className={styles.thumb}>
                                <span className={styles.thumb__logo}>
                                    {course.title}
                                </span>
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.name}>{course.title}</h3>
                                <p className={styles.meta}>{course.subtitle}</p>

                                <div className={styles.progress}>
                                    <div
                                        className={styles.progress__bar}
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
