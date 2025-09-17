import DataFetcher from '@/components/DataFetcher';
import Loading from '@/components/Loading';
import styles from './RenderPropsDemo.module.scss';

export default function RenderPropsDemo() {
    return (
        <div className={styles.page}>
            <h2 className={styles.heading}>Render Props Demo</h2>
            <p className={styles.subheading}>
                Áp dụng Render Props với DataFetcher.
            </p>

            {/* Posts List */}
            <section className={styles.section}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div className={styles.loading}>
                                    <Loading text=" Loading posts..." />
                                </div>
                            );

                        if (error)
                            return (
                                <div className={styles.error}>
                                    Error: {error}
                                </div>
                            );

                        return (
                            <div className={styles.block}>
                                <h3 className={styles.blockTitle}>Posts</h3>
                                <div className={styles.list}>
                                    {data?.map((post) => (
                                        <div
                                            key={post.id}
                                            className={styles.item}
                                        >
                                            {post.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }}
                </DataFetcher>
            </section>

            {/* Users List */}
            <section className={styles.section}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div className={styles.loading}>
                                    <Loading text=" Loading users..." />
                                </div>
                            );

                        if (error)
                            return (
                                <div className={styles.error}>
                                    Error: {error}
                                </div>
                            );

                        return (
                            <div className={styles.block}>
                                <h3 className={styles.blockTitle}>Users</h3>
                                <div className={styles.list}>
                                    {data?.map((user) => (
                                        <div
                                            key={user.id}
                                            className={styles.item}
                                        >
                                            <span className={styles.name}>
                                                {user.name}
                                            </span>
                                            <span className={styles.dot}>
                                                •
                                            </span>
                                            <span className={styles.email}>
                                                {user.email}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }}
                </DataFetcher>
            </section>
        </div>
    );
}
