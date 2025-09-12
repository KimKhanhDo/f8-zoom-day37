import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faFileLines,
    faMagnifyingGlass,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

import styles from './SearchDropDown.module.scss';

const SECTIONS = [
    {
        title: 'KHÓA HỌC',
        items: [
            { icon: faBook, title: 'Lập Trình JavaScript Cơ Bản' },
            { icon: faBook, title: 'Lập Trình JavaScript Nâng Cao' },
            { icon: faBook, title: 'JavaScript Pro' },
        ],
    },
    {
        title: 'BÀI VIẾT',
        items: [
            { icon: faFileLines, title: 'Xử Lý Bất Đồng Bộ Trong JS - Phần 1' },
            { icon: faFileLines, title: 'Nên dùng === hay == ?' },
            { icon: faFileLines, title: "Các 'phi lý' trong JavaScript" },
        ],
    },
    {
        title: 'VIDEO',
        items: [
            { icon: faVideo, title: "Giải thích các trường hợp 'phi lý'" },
            { icon: faVideo, title: 'Fn.apply() method trong JS?' },
        ],
    },
];

function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <header className={styles.section__head}>
                <h4 className={styles.section__title}>{title}</h4>
                <a
                    className={styles.section__more}
                    href="/"
                >
                    Xem thêm
                </a>
            </header>
            <div className={styles.section__divider} />
            <div className={styles.section__list}>{children}</div>
        </section>
    );
}

function Item({ icon, title }) {
    return (
        <a
            className={styles.item}
            href="#"
        >
            <span className={styles.item__icon}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className={styles.item__info}>
                <span className={styles.item__title}>{title}</span>
            </span>
        </a>
    );
}

function SearchDropDown() {
    return (
        <div className={styles.dropdown}>
            <div className={styles.headline}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>

                <span className={styles.headline__text}>
                    Kết quả cho 'javascript'
                </span>
            </div>

            {SECTIONS.map((section, index) => {
                return (
                    <Section
                        key={index}
                        title={section.title}
                    >
                        {section.items.map((item, index) => (
                            <Item
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            ></Item>
                        ))}
                    </Section>
                );
            })}
        </div>
    );
}

export default SearchDropDown;
