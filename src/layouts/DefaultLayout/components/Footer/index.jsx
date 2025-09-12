import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import appLogo from '../../../../assets/images/f8-logo.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Brand + contact */}
                <div className={styles.colBrand}>
                    <Link
                        to={'/'}
                        className={styles.brandRow}
                    >
                        <img
                            className={styles.logo}
                            src={appLogo}
                            alt="F8"
                        />
                        <span className={styles.brandText}>
                            Học Lập Trình Để Đi Làm
                        </span>
                    </Link>

                    <ul className={styles.contactList}>
                        <li>
                            <strong>Điện thoại:</strong> 08 1919 8989
                        </li>
                        <li>
                            <strong>Email:</strong> contact@fullstack.edu.vn
                        </li>
                        <li>
                            <strong>Địa chỉ:</strong> Số 1, ngõ 41, Trần Duy
                            Hưng, Cầu Giấy, Hà Nội
                        </li>
                    </ul>
                </div>

                {/* Về F8 */}
                <div className={styles.col}>
                    <h4 className={styles.title}>VỀ F8</h4>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#">Điều khoản</a>
                        </li>
                        <li>
                            <a href="#">Bảo mật</a>
                        </li>
                    </ul>
                </div>

                {/* Sản phẩm */}
                <div className={styles.col}>
                    <h4 className={styles.title}>SẢN PHẨM</h4>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="#">Game Nester</a>
                        </li>
                        <li>
                            <a href="#">Game CSS Diner</a>
                        </li>
                        <li>
                            <a href="#">Game CSS Selectors</a>
                        </li>
                        <li>
                            <a href="#">Game Froggy</a>
                        </li>
                    </ul>
                </div>

                {/* Công ty */}
                <div className={styles.colCompany}>
                    <h4 className={styles.title}>
                        CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                    </h4>
                    <ul className={styles.infoList}>
                        <li>
                            <strong>Mã số thuế:</strong> 0109922901
                        </li>
                        <li>
                            <strong>Ngày thành lập:</strong> 04/03/2022
                        </li>
                        <li>
                            <strong>Lĩnh vực hoạt động:</strong> Giáo dục, công
                            nghệ - lập trình. Chúng tôi tập trung xây dựng và
                            phát triển các sản phẩm mang lại giá trị cho cộng
                            đồng lập trình viên Việt Nam.
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.copy}>
                © 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam
            </div>
        </footer>
    );
}

export default Footer;
