import styles from './Home.module.scss';

/* ========= Fake data ========= */
const PRO_COURSES = [
    {
        title: 'HTML, CSS Pro',
        sub: 'Cho người mới bắt đầu',
        price: '1.299.000đ',
        oldPrice: '2.500.000đ',
        stats: { users: 'Sơn Đặng', views: '590', time: '116h50p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    },
    {
        title: 'JavaScript Pro',
        sub: 'Cho người mới bắt đầu',
        price: '1.399.000đ',
        oldPrice: '3.299.000đ',
        stats: { users: 'Sơn Đặng', views: '249', time: '48h33p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png',
    },
    {
        title: 'Ngôn ngữ Sass',
        sub: 'Cho Frontend Developer',
        price: '299.000đ',
        oldPrice: '400.000đ',
        stats: { users: 'Sơn Đặng', views: '27', time: '6h18p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png',
    },
];

const FREE_COURSES = [
    {
        title: 'Kiến Thức Nhập Môn IT',
        sub: 'Miễn phí',
        meta: { views: '136.463', lessons: '9', time: '3h12p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
    },
    {
        title: 'Lập trình C++ cơ bản, nâng cao',
        sub: 'Miễn phí',
        meta: { views: '36.561', lessons: '55', time: '10h18p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
    },
    {
        title: 'HTML, CSS từ Zero đến Hero',
        sub: 'Miễn phí',
        meta: { views: '214.244', lessons: '117', time: '29h5p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    },
    {
        title: 'Responsive Với Grid System',
        sub: 'Miễn phí',
        meta: { views: '47.807', lessons: '34', time: '6h31p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
    },
    {
        title: 'JavaScript Cơ bản',
        sub: 'Miễn phí',
        meta: { views: '150.845', lessons: '112', time: '24h15p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
    },
    {
        title: 'JavaScript Nâng cao',
        sub: 'Miễn phí',
        meta: { views: '41.463', lessons: '19', time: '8h41p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
    },
    {
        title: 'Làm việc với Terminal & Ubuntu',
        sub: 'Miễn phí',
        meta: { views: '21.186', lessons: '28', time: '4h59p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
    },
    {
        title: 'Xây Dựng Website với ReactJS',
        sub: 'Miễn phí',
        meta: { views: '77.941', lessons: '112', time: '27h32p' },
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    },
];

const FEATURED_POSTS = [
    {
        title: 'Tổng hợp các sản phẩm của học viên tại F8',
        author: 'Sơn Đặng',
        time: '6 phút đọc',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png',
    },
    {
        title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
        author: 'Sơn Đặng',
        time: '12 phút đọc',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
    },
    {
        title: 'Cách đưa code lên GitHub và tạo GitHub Pages',
        author: 'Võ Minh Kha',
        time: '4 phút đọc',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png',
    },
    {
        title: 'Ký sự ngày thứ 25 học ở F8',
        author: 'Sơn Sơn',
        time: '1 phút đọc',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615de64de7e8f.jpg',
    },
];

const FEATURED_VIDEOS = [
    {
        title: 'Bạn sẽ làm được gì sau khóa học?',
        duration: '03:15',
        img: 'https://i.ytimg.com/vi/R6plN3FvzFY/maxresdefault.jpg',
    },
    {
        title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những…',
        duration: '34:51',
        img: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
    },
    {
        title: 'Phương pháp học lập trình của Admin F8?',
        duration: '24:06',
        img: 'https://i.ytimg.com/vi/DpvYHLUiZpc/maxresdefault.jpg',
    },
    {
        title: 'Học Flexbox qua ví dụ',
        duration: '25:10',
        img: 'https://i.ytimg.com/vi/G19jZzK5FWI/maxresdefault.jpg',
    },
];

/* ========= Components ========= */
function CourseCard({ title, img, sub, price, oldPrice, stats }) {
    return (
        <article className={styles.card}>
            <img
                className={styles.card__thumb}
                src={img}
                alt={title}
                loading="lazy"
            />
            <div className={styles.card__body}>
                <h4 className={styles.card__title}>{title}</h4>
                <div className={styles.card__sub}>{sub}</div>
                <div className={styles.card__price}>
                    <span className={styles.old}>{oldPrice}</span>
                    <span className={styles.new}>{price}</span>
                </div>
                <div className={styles.card__meta}>
                    <span>{stats.users}</span>
                    <span>{stats.views}</span>
                    <span>{stats.time}</span>
                </div>
            </div>
        </article>
    );
}

function FreeCourseCard({ title, img, sub, meta }) {
    return (
        <article className={styles.free}>
            <img
                className={styles.free__thumb}
                src={img}
                alt={title}
                loading="lazy"
            />
            <div className={styles.free__body}>
                <h4 className={styles.free__title}>{title}</h4>
                <div className={styles.free__sub}>{sub}</div>
                <div className={styles.free__meta}>
                    <span>{meta.views}</span>
                    <span>{meta.lessons}</span>
                    <span>{meta.time}</span>
                </div>
            </div>
        </article>
    );
}

function PostCard({ title, img, author, time }) {
    return (
        <article className={styles.post}>
            <img
                className={styles.post__thumb}
                src={img}
                alt={title}
                loading="lazy"
            />
            <div className={styles.post__body}>
                <h4 className={styles.post__title}>{title}</h4>
                <div className={styles.post__meta}>
                    <span>{author}</span>
                    <span>{time}</span>
                </div>
            </div>
        </article>
    );
}

function VideoCard({ title, img, duration }) {
    return (
        <article className={styles.video}>
            <div className={styles.video__thumbWrap}>
                <img
                    className={styles.video__thumb}
                    src={img}
                    alt={title}
                    loading="lazy"
                />
                <span className={styles.video__badge}>{duration}</span>
            </div>
            <div className={styles.video__body}>
                <h4 className={styles.video__title}>{title}</h4>
                <div className={styles.video__meta}>
                    <span>131.428</span>
                    <span>6.212</span>
                    <span>340</span>
                </div>
            </div>
        </article>
    );
}

function Home() {
    return (
        <div className={styles.page}>
            {/* ========== HERO ========== */}
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>
                        Mở bán khóa JavaScript Pro{' '}
                        <span className={styles.crown}>👑</span>
                    </h2>
                    <p className={styles.hero__desc}>
                        Từ 08/08/2024 khóa học sẽ có giá 1.399k. Khi khóa học
                        hoàn thiện sẽ trở về giá gốc.
                    </p>
                    <a
                        href="#"
                        className={styles.hero__cta}
                    >
                        HỌC THỬ MIỄN PHÍ
                    </a>
                </div>

                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__img}
                        src="https://files.fullstack.edu.vn/f8-prod/banners/37/66b5a6b16d31a.png"
                        alt="JavaScript Pro Banner"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* ========== KHÓA HỌC PRO ========== */}
            <section className={styles.section}>
                <div className={styles.section__head}>
                    <h3 className={styles.section__title}>Khóa học Pro</h3>
                    <span className={styles.badgeNew}>MỚI</span>
                </div>

                <div className={styles.grid3}>
                    {PRO_COURSES.map((course) => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            img={course.img}
                            sub={course.sub}
                            price={course.price}
                            oldPrice={course.oldPrice}
                            stats={course.stats}
                        />
                    ))}
                </div>
            </section>

            {/* ========== KHÓA HỌC MIỄN PHÍ ========== */}
            <section className={styles.section}>
                <div className={styles.section__head}>
                    <div className={styles.section__title}>
                        Khóa học miễn phí
                    </div>
                    <a
                        href="#"
                        className={styles.more}
                    >
                        Xem lộ trình
                    </a>
                </div>

                <div className={styles.grid4}>
                    {FREE_COURSES.map((course) => (
                        <FreeCourseCard
                            key={course.title}
                            {...course}
                        />
                    ))}
                </div>
            </section>

            {/* ========== BÀI VIẾT NỔI BẬT ========== */}
            <section className={styles.section}>
                <div className={styles.section__head}>
                    <div className={styles.section__title}>
                        Bài viết nổi bật
                    </div>
                    <a
                        href="#"
                        className={styles.more}
                    >
                        Xem tất cả
                    </a>
                </div>

                <div className={styles.grid4}>
                    {FEATURED_POSTS.map((post) => (
                        <PostCard
                            key={post.title}
                            {...post}
                        />
                    ))}
                </div>
            </section>

            {/* ========== VIDEOS NỔI BẬT ========== */}
            <section className={styles.section}>
                <div className={styles.section__head}>
                    <div className={styles.section__title}>Videos nổi bật</div>
                    <a
                        href="#"
                        className={styles.more}
                    >
                        Xem tất cả
                    </a>
                </div>

                <div className={styles.grid4}>
                    {FEATURED_VIDEOS.map((video) => (
                        <VideoCard
                            key={video.title}
                            {...video}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
