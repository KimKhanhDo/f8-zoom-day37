import { useState, useRef, useCallback } from 'react';
import clsx from 'clsx';

import styles from './ModalDemo.module.scss';
import Modal from '../../components/Modal';

function CourseAssignContent({ isOpen, onClose, onToggle }) {
    return (
        <div className={clsx(styles.assignModal, { [styles.active]: isOpen })}>
            <section className={styles.assignIntro}>
                <h2 className={styles.assignHeading}>
                    Đăng ký nhận tư vấn khóa học 📚
                </h2>
                <p className={styles.assignSub}>
                    Cho mình biết nhu cầu của bạn. Team sẽ gọi/nhắn lại trong 24
                    giờ với lộ trình phù hợp.
                </p>
                <ul className={styles.assignBullets}>
                    <li>🎯 Cá nhân hóa mục tiêu học</li>
                    <li>🗓️ Lịch học linh hoạt</li>
                    <li>💬 Tư vấn miễn phí & trung thực</li>
                </ul>
            </section>

            <section className={styles.assignPanel}>
                <form
                    className={styles.assignForm}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className={styles.assignRow2}>
                        <div className={styles.assignField}>
                            <label htmlFor="fullName">Họ và tên</label>
                            <input
                                id="fullName"
                                type="text"
                            />
                        </div>
                        <div className={styles.assignField}>
                            <label htmlFor="phone">Số điện thoại</label>
                            <input
                                id="phone"
                                type="tel"
                            />
                        </div>
                    </div>

                    <div className={styles.assignRow2}>
                        <div className={styles.assignField}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className={styles.assignField}>
                            <label htmlFor="time">Thời gian mong muốn</label>
                            <select
                                id="time"
                                defaultValue=""
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Chọn thời gian…
                                </option>
                                <option>Buổi tối (T2–T6)</option>
                                <option>Cuối tuần (T7–CN)</option>
                                <option>Linh hoạt (theo lịch trống)</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.assignField}>
                        <label>Mức độ hiện tại</label>
                        <div className={styles.assignChips}>
                            <label>
                                <input
                                    type="radio"
                                    name="level"
                                    defaultChecked
                                />{' '}
                                Mới bắt đầu
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="level"
                                />{' '}
                                Đã biết cơ bản
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="level"
                                />{' '}
                                Nâng cao
                            </label>
                        </div>
                    </div>

                    <div className={styles.assignField}>
                        <label>Quan tâm đến khóa</label>
                        <div className={styles.assignChecks}>
                            <label>
                                <input type="checkbox" /> HTML/CSS
                            </label>
                            <label>
                                <input type="checkbox" /> JavaScript
                            </label>
                            <label>
                                <input type="checkbox" /> React
                            </label>
                            <label>
                                <input type="checkbox" /> Sass/SCSS
                            </label>
                        </div>
                    </div>

                    <div className={styles.assignField}>
                        <label htmlFor="goal">Mục tiêu của bạn</label>
                        <textarea
                            id="goal"
                            rows="3"
                            placeholder="Ví dụ: chuyển ngành sang Frontend, hoàn thành portfolio trong 8 tháng…"
                        />
                    </div>

                    <label className={styles.assignConsent}>
                        <input type="checkbox" /> Tôi đồng ý nhận liên hệ tư
                        vấn.
                    </label>

                    <div className={styles.assignActions}>
                        <button
                            type="submit"
                            className={styles.assignBtnPrimary}
                            onClick={onToggle}
                        >
                            Test Modal Toggle
                        </button>
                        <button
                            type="button"
                            className={styles.assignBtnGhost}
                            onClick={onClose}
                        >
                            Để sau
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

function ModalDemo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const handleRequestOpen = useCallback(() => setIsModalOpen(true), []);
    const handleRequestClose = useCallback(() => setIsModalOpen(false), []);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h2 className={styles.title}>Modal Demo</h2>
                    <p className={styles.desc}>
                        Trang này dùng để thử nghiệm giao diện & hành vi của
                        Modal.
                    </p>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.btnHero}
                            onClick={() => modalRef.current?.open()}
                        >
                            Xem demo Modal
                        </button>
                        <button
                            type="button"
                            className={styles.btnHero}
                            onClick={() => modalRef.current?.toggle()}
                        >
                            Test Modal Toggle
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Modal Component</h3>
                    <ul className={styles.list}>
                        <li>
                            Nhấn nút <b>Xem demo Modal</b> để gọi hàm mở modal.
                        </li>
                        <li>
                            Đóng bằng click <b>outside, ESC và nút Close</b>.
                        </li>
                        <li>
                            <b>Cleanup </b>khi component unmount.
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>
                        Modal Component với useImperativeHandle
                    </h3>
                    <ul className={styles.list}>
                        <li>
                            Nhấn nút <b>Xem demo Modal</b> để gọi hàm mở modal,
                            sử dụng <b>modalRef.current.open()</b>
                        </li>
                        <li>
                            Nhấn nút <b>Test Modal Toggle</b> để gọi hàm toggle
                            modal, sử dụng <b>modalRef.current.toggle()</b>
                        </li>
                        <li>
                            Nhấn nút <b>Để sau</b> bên trong nội dung Modal để
                            gọi hàm close modal, sử dụng{' '}
                            <b>modalRef.current.close()</b>
                        </li>
                    </ul>
                </div>
            </section>
            <Modal
                ref={modalRef}
                isOpen={isModalOpen}
                onAfterOpen={() => console.log('Modal đã mở')}
                onAfterClose={() => console.log('Modal đã đóng')}
                onRequestOpen={handleRequestOpen} // Modal gọi khi bấm open() qua ref
                onRequestClose={handleRequestClose} // Modal gọi khi ESC/overlay click/close button hoặc close() qua ref
                closeTimeoutMS={300}
                overlayClassName={styles['custom-overlay']}
                className={styles['custom-modal']}
                bodyOpenClassName="modal-open"
                htmlOpenClassName="modal-open"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <CourseAssignContent
                    isOpen={isModalOpen}
                    onClose={() => modalRef.current?.close()}
                    onToggle={() => modalRef.current?.toggle()}
                />
            </Modal>
        </div>
    );
}

export default ModalDemo;
