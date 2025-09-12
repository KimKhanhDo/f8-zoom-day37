import styles from './UserDropDown.module.scss';

const user = {
    name: 'Khánh Đỗ',
    username: '@dokimkhanh',
    avatar: '/src/assets/images/f8-logo.png',
};

const MENU_TOP = [
    { label: 'Viết blog', href: '#' },
    { label: 'Bài viết của tôi', href: '#' },
    { label: 'Bài viết đã lưu', href: '#' },
];

const MENU_BOTTOM = [
    { label: 'Cài đặt', href: '#' },
    { label: 'Đăng xuất', href: '#' },
];

export default function UserDropDown() {
    return (
        <div className={`user-dropdown ${styles.dropdown}`}>
            {/* Header user */}
            <div className={styles.header}>
                <div className={styles.avatarWrap}>
                    <img
                        className={styles.avatar}
                        src={user.avatar}
                        alt={user.name}
                    />
                    <span className={styles.crown} />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.username}>{user.username}</div>
                </div>
            </div>

            <div className={styles.divider} />

            <a
                className={styles.item}
                href="#"
                onClick={(e) => e.preventDefault()}
            >
                Trang cá nhân
            </a>

            <div className={styles.divider} />

            {/* Menu top */}
            <nav className={styles.menu}>
                {MENU_TOP.map((menu, index) => (
                    <a
                        key={index}
                        className={styles.item}
                        href={menu.href}
                        onClick={(e) => e.preventDefault()}
                    >
                        {menu.label}
                    </a>
                ))}
            </nav>

            <div className={styles.divider} />

            {/* Menu bottom */}
            <nav className={styles.menu}>
                {MENU_BOTTOM.map((menu, index) => (
                    <a
                        key={index}
                        className={styles.item}
                        href={menu.href}
                        onClick={(e) => e.preventDefault()}
                    >
                        {menu.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}
