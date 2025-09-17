import { useState, useEffect, useCallback, useMemo } from 'react';
import clsx from 'clsx';

import styles from './PerformanceDemo.module.scss';
import CounterDisplay from './components/CounterDisplay';
import ActionButtons from './components/ActionButtons';
import ExpensiveChild from './components/ExpensiveChild';

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const handleIncrement = useCallback(() => setCount((prev) => prev + 1), []);
    const handleReset = useCallback(() => setCount(0), []);

    const handleChangeName = () => {
        if (items.length === 0) return;

        const randomIndex = Math.floor(Math.random() * items.length);
        const randomName = items[randomIndex].name;
        setName(randomName);
    };

    const handleAddItem = () => {
        setItems((prev) => [
            ...prev,
            {
                id: Date.now(),
                name: `User ${prev.length + 1}`,
                email: `user${prev.length + 1}@gmail.com`,
            },
        ]);
    };

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating longest name...');
        let longest = '';
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 100000; i++) {
                if (item.name.length > longest.length) {
                    longest = item.name;
                }
            }
        });
        return longest;
    }, [items]);

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Performance Demo</h1>
                <p className={styles.sub}>
                    Tối ưu re-render với React.memo &amp; useCallback.
                </p>

                {/* Buttons */}
                <div className={styles.toolbar}>
                    <button
                        type="button"
                        className={`${styles.tbBtn} ${styles.tbPrimary}`}
                        onClick={handleIncrement}
                    >
                        Increment Count
                    </button>
                    <button
                        type="button"
                        className={`${styles.tbBtn} ${styles.tbNeutral}`}
                        onClick={handleChangeName}
                    >
                        Change Name
                    </button>
                    <button
                        type="button"
                        className={`${styles.tbBtn} ${styles.tbGhost}`}
                        onClick={handleAddItem}
                    >
                        Add Item
                    </button>
                </div>
            </header>

            <div className={styles.grid}>
                {/* Left: Counter + btns Increment/Reset */}
                <section
                    className={clsx(
                        styles.card,
                        styles.pad,
                        styles.counterBlock
                    )}
                >
                    <CounterDisplay count={count} />
                    <div className={styles.names}>
                        <p className={styles.meta}>
                            User: <span>{name}</span>
                        </p>
                        <p className={styles.meta}>
                            Longest Name: <span>{expensiveCalculation}</span>
                        </p>
                    </div>

                    <ActionButtons
                        onIncrement={handleIncrement}
                        onReset={handleReset}
                    />
                </section>

                {/* Right: Expensive list */}
                <section
                    className={clsx(styles.card, styles.pad, styles.right)}
                >
                    {items && <ExpensiveChild items={items} />}
                </section>
            </div>
        </section>
    );
}

export default PerformanceDemo;
