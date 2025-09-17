import withLoading from '@/hoc/withLoading';
import styles from './UserProfile.module.scss';

function UserProfile() {
    return (
        <div className={styles.page}>
            <h3 className={styles.title}>🧑🏻‍💻 User Profile</h3>
            <div className={styles.info}>
                <p className={styles.text}>
                    <span className={styles.label}>Name:</span> John Doe
                </p>
                <p className={styles.text}>
                    <span className={styles.label}>Email: </span>
                    john@example.com
                </p>
            </div>
        </div>
    );
}

const UserProfileWithLoading = withLoading(UserProfile);

export default UserProfileWithLoading;
