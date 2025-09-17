import { useEffect, useRef, useState } from 'react';

import styles from './FocusDemo.module.scss';
import CustomInput from '@/components/CustomInput';
import clsx from 'clsx';

const inputsConfig = [
    { label: 'Câu hỏi 1', placeholder: 'Đã hiểu useRef , forwardRef chưa?' },
    { label: 'Câu hỏi 2', placeholder: 'Đã hiểu useImperativeHandle chưa?' },
];

function FocusDemo() {
    const [values, setValues] = useState([]); // used for controlled inputs
    const [fetchedValues, setFetchedValues] = useState([]); // Uncontrolled + imperative (getValue())
    const [showFetched, setShowFetched] = useState(false);

    const counterRef = useRef(0);
    const inputRefs = useRef([]);

    useEffect(() => {
        console.log('Refs array:', inputRefs.current);
    }, []);

    const handleChange = (e, index) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);
    };

    const handleClear = () => {
        inputRefs.current[0].blur();
        inputRefs.current[1].blur();
        setShowFetched(false);
        setValues([]);
    };

    const handleGetValues = () => {
        const values = inputRefs.current.map((ref) => ref.getValue());
        setFetchedValues(values);
        setShowFetched(!showFetched);
    };

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Focus Demo</h2>
                <p className={styles.sub}>
                    Áp dụng kĩ thuật forwardRef, useRef, useImperativeHandle.
                </p>

                {/* Buttons */}
                <div className={styles.toolbar}>
                    <button
                        className={clsx(styles.tbBtn, styles.tbPrimary)}
                        onClick={() => inputRefs.current[0].focus()}
                    >
                        Focus Input 1
                    </button>
                    <button
                        className={clsx(styles.tbBtn, styles.tbPrimary)}
                        onClick={() => inputRefs.current[1].focus()}
                    >
                        Focus Input 2
                    </button>
                    <button
                        className={clsx(styles.tbBtn, styles.tbGhost)}
                        onClick={handleClear}
                    >
                        Clear Both
                    </button>
                    <button
                        className={clsx(styles.tbBtn, styles.tbNeutral)}
                        onClick={handleGetValues}
                    >
                        Get Values
                    </button>
                </div>
            </header>

            <section className={styles.card}>
                <h3 className={styles.heading}>forwardRef</h3>
                <div className={styles.grid}>
                    {/* Left: Inputs */}
                    <div className={styles.left}>
                        {inputsConfig.map((config, index) => (
                            <CustomInput
                                key={config.label}
                                label={config.label}
                                placeholder={config.placeholder}
                                value={values[index] ?? ''}
                                onChange={(e) => handleChange(e, index)}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                            />
                        ))}
                    </div>

                    {/* Right: Display Info */}
                    <div className={styles.right}>
                        <div className={styles.counterBox}>
                            <div className={styles.counterTitle}>
                                Render Count
                            </div>
                            <div className={styles.counterValue}>
                                {++counterRef.current}
                            </div>
                        </div>

                        <ul className={styles.notes}>
                            {showFetched &&
                                fetchedValues.length !== 0 &&
                                fetchedValues
                                    .filter((value) => value.trim() !== '')
                                    .map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default FocusDemo;
