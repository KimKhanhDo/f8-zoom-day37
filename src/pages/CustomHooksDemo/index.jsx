import clsx from 'clsx';

import useApi from '@/hooks/useApi';
import useToggle from '@/hooks/useToggle';
import Loading from '@/components/Loading';
import styles from './CustomHooksDemo.module.scss';

function PostsBlock({ posts, isDark, onRefetch }) {
    return (
        <div className={styles.block}>
            <div className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Posts</h3>
                <button
                    className={clsx(styles.btnSm, { [styles.isDark]: isDark })}
                    onClick={onRefetch}
                >
                    Refetch Posts
                </button>
            </div>

            <div className={styles.list}>
                {posts?.map((p) => (
                    <div
                        key={p.id}
                        className={styles.item}
                    >
                        {p.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

function UsersBlock({ users, isDark, onRefetch }) {
    return (
        <div className={styles.block}>
            <div className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Users</h3>
                <button
                    className={clsx(styles.btnSm, { [styles.isDark]: isDark })}
                    onClick={onRefetch}
                >
                    Refetch Users
                </button>
            </div>

            <div className={styles.list}>
                {users?.map((u) => (
                    <div
                        key={u.id}
                        className={styles.item}
                    >
                        <span className={styles.name}>{u.name}</span>
                        <span className={styles.dot}> • </span>
                        <span className={styles.email}>{u.email}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ControlButtons({
    isDark,
    toggleTheme,
    showPosts,
    togglePosts,
    setShowPosts,
    showUsers,
    toggleUsers,
    setShowUsers,
}) {
    return (
        <div className={styles.controls}>
            {/* Theme */}
            <button
                className={clsx(styles.btn, styles.theme)}
                onClick={toggleTheme}
            >
                {isDark ? 'Light theme' : 'Dark theme'}
            </button>

            {/* Posts */}
            <button
                className={clsx(styles.btn, { [styles.visible]: showPosts })}
                onClick={togglePosts}
            >
                {showPosts ? 'Hide' : 'Show'} Posts
            </button>
            <button
                className={clsx(styles.btn, { [styles.accent]: isDark })}
                onClick={() => setShowPosts(true)}
            >
                Force Show Posts
            </button>

            {/* Users */}
            <button
                className={clsx(styles.btn, { [styles.visible]: showUsers })}
                onClick={toggleUsers}
            >
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
            <button
                className={clsx(styles.btn, { [styles.accent]: isDark })}
                onClick={() => setShowUsers(true)}
            >
                Force Show Users
            </button>
        </div>
    );
}

function CustomHooksDemo() {
    // Toggles
    const [showPosts, togglePosts, setShowPosts] = useToggle(true);
    const [showUsers, toggleUsers, setShowUsers] = useToggle(true);
    const [isDark, toggleTheme] = useToggle(false);

    // useAPI hook
    const {
        data: posts,
        loading: postsLoading,
        error: postsError,
        refetch: refetchPosts,
    } = useApi('https://jsonplaceholder.typicode.com/posts?_limit=5');

    const {
        data: users,
        loading: usersLoading,
        error: usersError,
        refetch: refetchUsers,
    } = useApi('https://jsonplaceholder.typicode.com/users?_limit=5');

    return (
        <div
            className={clsx(styles.page, {
                [styles.dark]: isDark,
            })}
        >
            <h2 className={styles.heading}>Custom Hooks Demo</h2>
            <p className={styles.subheading}>Áp dụng useApi và useToggle.</p>

            {/* Control Buttons */}
            <ControlButtons
                isDark={isDark}
                toggleTheme={toggleTheme}
                showPosts={showPosts}
                togglePosts={togglePosts}
                setShowPosts={setShowPosts}
                showUsers={showUsers}
                toggleUsers={toggleUsers}
                setShowUsers={setShowUsers}
            />

            {/* Posts Section */}
            {showPosts && (
                <section className={styles.section}>
                    {postsLoading ? (
                        <div className={styles.loading}>
                            <Loading text="Loading posts..." />
                        </div>
                    ) : postsError ? (
                        <div className={styles.error}>Error: {postsError}</div>
                    ) : (
                        <PostsBlock
                            posts={posts}
                            isDark={isDark}
                            onRefetch={refetchPosts}
                        />
                    )}
                </section>
            )}

            {/* Users Section */}
            {showUsers && (
                <section className={styles.section}>
                    {usersLoading ? (
                        <div className={styles.loading}>
                            <Loading text=" Loading users..." />
                        </div>
                    ) : usersError ? (
                        <div className={styles.error}>Error: {usersError}</div>
                    ) : (
                        <UsersBlock
                            users={users}
                            isDark={isDark}
                            onRefetch={refetchUsers}
                        />
                    )}
                </section>
            )}
        </div>
    );
}

export default CustomHooksDemo;
