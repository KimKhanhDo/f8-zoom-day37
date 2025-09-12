import GoToTop from '../../components/GoToTop';
import styles from './ScrollDemo.module.scss';

export default function ScrollDemo() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1>Scroll Demo — GoToTop UI</h1>
                <p className={styles.lead}>
                    Trang demo chứa các đoạn văn bản dài để kiểm tra giao diện
                    nút GoToTop.
                </p>
            </header>

            <section className={styles.paper}>
                <p>
                    React là thư viện JavaScript tập trung vào việc xây dựng
                    giao diện người dùng theo hướng <b>component</b>. Mỗi
                    component là một khối độc lập, có thể tái sử dụng, nhận{' '}
                    <b>props</b> làm đầu vào và quản lý <b>state</b> nội bộ để
                    hiển thị giao diện.
                </p>
                <p>
                    Điểm mạnh của React nằm ở cơ chế <b>render theo dữ liệu</b>:
                    khi state/props thay đổi, React tính toán khác biệt và chỉ
                    cập nhật phần cần thiết trên DOM, giúp hiệu năng ổn định và
                    code dễ đọc hơn so với thao tác DOM thủ công.
                </p>
                <p>
                    <b>Props</b> dùng để truyền dữ liệu từ cha xuống con và có
                    tính bất biến trong phạm vi component con. <b>State</b> là
                    dữ liệu có thể thay đổi theo thời gian, được quản lý ngay
                    trong component. Quy tắc “<i>props down, events up</i>” giúp
                    luồng dữ liệu rõ ràng.
                </p>
                <p>
                    <code>useState</code> là hook phổ biến nhất để khai báo
                    state. Mỗi lần gọi <code>setState</code> sẽ lên lịch render
                    lại. Nên cập nhật state bằng hàm callback khi phụ thuộc vào
                    giá trị trước đó để tránh điều kiện tranh chấp.
                </p>
                <p>
                    <code>useEffect</code> cho phép chạy <b>side-effects</b> như
                    gọi API, đăng ký sự kiện, hoặc thao tác với tài nguyên bên
                    ngoài React. Đừng quên <b>cleanup</b> bằng cách return một
                    hàm trong effect để huỷ listener/timer khi component unmount
                    hoặc khi dependencies thay đổi.
                </p>
                <p>
                    Khi render danh sách, luôn đặt <b>key ổn định</b> (tránh
                    dùng index nếu có thể) để React nhận diện chính xác các phần
                    tử thêm/xoá/đổi chỗ, từ đó tránh bug và tăng hiệu suất.
                </p>
                <p>
                    Về tối ưu, <code>React.memo</code> giúp tránh render lại khi
                    props không đổi.
                    <code> useMemo</code> và <code>useCallback</code> dùng để
                    nhớ kết quả tính toán nặng hoặc ổn định hoá hàm callback,
                    nhưng chỉ nên dùng khi có vấn đề hiệu năng thực sự.
                </p>
                <p>
                    <code>useRef</code> lưu trữ giá trị <i>mutable</i> không
                    kích hoạt render, thường dùng để truy cập DOM, lưu timer
                    hoặc biến đệm. Khác với state, thay đổi{' '}
                    <code>ref.current</code>
                    sẽ không khiến component render lại.
                </p>
                <p>
                    <b>Controlled components</b> (form) giúp giá trị input luôn
                    đồng bộ với state, nhờ đó dễ xác thực dữ liệu, định dạng đầu
                    vào và xử lý submit theo luồng dữ liệu một chiều.
                </p>
                <p>
                    Với chia sẻ trạng thái sâu, <code>Context</code> giúp truyền
                    dữ liệu qua nhiều tầng mà không cần prop drilling. Tuy
                    nhiên, context thay đổi có thể khiến nhiều component render
                    lại; cân nhắc tách context hoặc kết hợp selector để giới hạn
                    phạm vi cập nhật.
                </p>
                <p>
                    Về kiến trúc, React khuyến khích <b>composition</b> thay vì
                    kế thừa. Ghép các component nhỏ, rõ trách nhiệm; “
                    <i>lift state up</i>” khi nhiều component cần chung dữ liệu;
                    và tách phần trình bày (UI) khỏi phần xử lý (logic) để dễ
                    kiểm thử và tái sử dụng.
                </p>
                <p>
                    Cuối cùng, hãy chú ý trải nghiệm: xử lý trạng thái{' '}
                    <i>loading</i>/<i>error</i>, thêm skeleton để tránh nhấp
                    nháy, và dùng chuyển động/transition vừa đủ. Khi dự án lớn
                    hơn, cân nhắc router, quản lý state nâng cao, code-splitting
                    và caching để giữ hiệu năng mượt.
                </p>
            </section>

            <GoToTop />
        </div>
    );
}
