import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './CustomInput.module.scss';

function CustomInput({ label, placeholder, ...rest }, ref) {
    // ref nội bộ trong MyInput, trỏ tới DOM <input>
    const inputRef = useRef();

    // useImperativeHandle: quyết định những gì được expose ra ngoài cho Parent
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus(),
        blur: () => {
            inputRef.current.blur();
        },
        getValue: () => inputRef.current.value,
    }));

    return (
        <>
            <label className={styles.wrap}>
                <span className={styles.label}>{label}</span>
                <input
                    ref={inputRef}
                    placeholder={placeholder}
                    {...rest}
                    className={styles.input}
                />
            </label>
        </>
    );
}

export default forwardRef(CustomInput);
