import { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import DEFAULT_AVATAR from '../../assets/images/avatar_placeholde.png';

function Profile() {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewUrl = URL.createObjectURL(image);
        setPreviewUrl(previewUrl);
    };

    useEffect(() => {
        return () => URL.revokeObjectURL(previewUrl);
    }, [previewUrl]);

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                {/* Top: Avatar + Heading */}
                <div className={styles.topRow}>
                    <label
                        htmlFor="avatarInput"
                        className={styles.avatarWrap}
                    >
                        <input
                            hidden
                            id="avatarInput"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                        />

                        <img
                            className={styles.avatarImg}
                            src={previewUrl || DEFAULT_AVATAR}
                            alt="Avatar"
                        />
                    </label>

                    <div className={styles.heading}>
                        <span className={styles.role}>
                            KỸ SƯ PHẦN MỀM · BUG WHISPERER
                        </span>
                        <h1 className={styles.name}>Null Value</h1>
                        <div className={styles.handle}>@null-value</div>
                    </div>
                </div>

                {/* Bio */}
                <p className={styles.bio}>
                    Cà phê chạy bằng người. Chuyên thuần hóa bug khó, dọn rác
                    legacy và đặt tên biến như đặt tên thú cưng. Triết lý: “Code
                    chạy được là tạm ổn, chạy nhanh là tuyệt vời, chạy xong vẫn
                    nhớ test càng tuyệt hơn.” Không deploy thứ Sáu trừ khi… có
                    người khác bấm nút.
                </p>

                {/* Contacts */}
                <ul className={styles.contactList}>
                    <li>
                        <span className={styles.contactIcon}>🚨</span>
                        <span className={styles.contactText}>
                            0987 654 321 — “Hotline cứu prod lúc nửa đêm”
                        </span>
                    </li>
                    <li>
                        <span className={styles.contactIcon}>📞</span>
                        <span className={styles.contactText}>
                            0901 234 567 — “Đổ chuông khi có ticket P0”
                        </span>
                    </li>
                    <li>
                        <span className={styles.contactIcon}>✉️</span>
                        <span className={styles.contactText}>
                            null.value@gmail.com
                        </span>
                    </li>
                    <li>
                        <span className={styles.contactIcon}>f</span>
                        <span className={styles.contactText}>
                            null.undefined.fb
                        </span>
                    </li>
                </ul>

                {/* Footer actions */}
                <div className={styles.bottomRow}>
                    <div className={styles.metrics}>
                        <div className={styles.metricChip}>
                            <span className={styles.metricIcon}>👥</span>
                            <span>
                                1,024 người đang theo dõi tiến độ “tạm ổn”.
                            </span>
                        </div>
                        <button
                            type="button"
                            className={styles.shareBtn}
                        >
                            ↗
                        </button>
                    </div>

                    <button
                        type="button"
                        className={styles.primaryBtn}
                    >
                        View Profile
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Profile;
