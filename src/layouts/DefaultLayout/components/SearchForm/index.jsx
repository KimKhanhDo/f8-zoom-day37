import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './SearchForm.module.scss';
import SearchDropDown from './components';

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.searchWrap}>
            <form
                className={styles.search}
                onSubmit={(e) => e.preventDefault()}
            >
                <span
                    className={clsx(styles.search__icon, {
                        [styles.active]: isOpen,
                    })}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>

                <input
                    className={styles.search__input}
                    placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                />

                {isOpen && (
                    <button
                        className={styles.search__clear}
                        type="button"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </form>

            {/* Dropdown */}
            {isOpen && <SearchDropDown />}
        </div>
    );
}

export default SearchForm;
