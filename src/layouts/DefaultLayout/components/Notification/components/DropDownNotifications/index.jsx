import clsx from 'clsx';
import styles from './DropDownNotifications.module.scss';

const NOTICES = [
    {
        id: 1,
        type: 'user',
        user: 'Happy Coder',
        message: ' đã thích bình luận của bạn.',
        time: 'một ngày trước',
        unread: true,
    },
    {
        id: 2,
        type: 'user',
        user: 'Happy Coder',
        message: ' đã nhắc tới bạn trong một bình luận.',
        time: 'một ngày trước',
        unread: true,
    },
    {
        id: 3,
        type: 'user',
        user: 'Happy Coder',
        message: ' đã thích bình luận của bạn.',
        time: 'một ngày trước',
        unread: false,
    },
    {
        id: 4,
        type: 'system',
        message: 'Tóm tắt chương ',
        time: 'một ngày trước',
        unread: true,
    },
    {
        id: 5,
        type: 'system',
        message: 'Tích hợp với Frontend ',
        time: 'một ngày trước',
        unread: true,
    },
    {
        id: 6,
        type: 'system',
        message: 'Hoàn thiện phần sửa và xóa ',
        time: 'một ngày trước',
        unread: false,
    },
    {
        id: 7,
        type: 'system',
        message: 'Tìm hiểu CRUD và REST API ',
        time: 'một ngày trước',
        unread: false,
    },
];

function DropDownNotifications() {
    return (
        <div className={`notify-dropdown ${styles.dropdown}`}>
            <header className={styles.header}>
                <h6 className={styles.title}>Thông báo</h6>
                <button
                    className={styles.markRead}
                    type="button"
                >
                    Đánh dấu đã đọc
                </button>
            </header>

            <div className={styles.body}>
                <ul className={styles.list}>
                    {NOTICES.map((notice) => {
                        const isUser = notice.type === 'user';

                        return (
                            <li
                                key={notice.id}
                                className={clsx(styles.item, {
                                    [styles.unread]: notice.unread,
                                })}
                            >
                                {/* Left */}
                                <div className={styles.left}>
                                    {isUser ? (
                                        <div className={styles.avatar}>
                                            <span>HC</span>
                                            <span className={styles.react}>
                                                👍
                                            </span>
                                        </div>
                                    ) : (
                                        <div className={styles.badgeF8}>F8</div>
                                    )}
                                </div>

                                {/* Right */}
                                <div className={styles.content}>
                                    {isUser ? (
                                        <p className={styles.text}>
                                            <strong>{notice.user}</strong>
                                            {notice.message}
                                        </p>
                                    ) : (
                                        <p className={styles.text}>
                                            Bài học
                                            <strong> {notice.message}</strong>
                                            mới được thêm vào.
                                        </p>
                                    )}
                                    <span className={styles.time}>
                                        {notice.time}
                                    </span>
                                </div>

                                {notice.unread && (
                                    <span className={styles.dot} />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <footer className={styles.footer}>
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={styles.viewAll}
                >
                    Xem tất cả thông báo
                </a>
            </footer>
        </div>
    );
}

export default DropDownNotifications;
