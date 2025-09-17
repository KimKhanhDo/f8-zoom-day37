import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

function Modal(props, ref) {
    const {
        isOpen = false,
        children,
        onAfterOpen,
        onAfterClose,
        onRequestOpen,
        onRequestClose,
        overlayClassName,
        className,
        bodyOpenClassName = 'modal-open',
        htmlOpenClassName = 'modal-open',
        shouldCloseOnOverlayClick = true,
        shouldCloseOnEsc = true,
        closeTimeoutMS = 0,
    } = props;

    const [closing, setClosing] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => onRequestOpen(),
        close: () => handleRequestClose(),
        toggle: () => {
            if (isOpen) {
                handleRequestClose();
            } else {
                onRequestOpen();
            }
        },
    }));

    const handleRequestClose = useCallback(() => {
        setClosing(true); // bật trạng thái closing để CSS chạy animation
        setTimeout(onRequestClose, closeTimeoutMS);
    }, [closeTimeoutMS, onRequestClose]);

    // ESC
    useEffect(() => {
        if (!shouldCloseOnEsc || !isOpen) return;

        const onEsc = (e) => {
            if (e.key === 'Escape') handleRequestClose();
        };

        document.addEventListener('keydown', onEsc);

        return () => document.removeEventListener('keydown', onEsc);
    }, [shouldCloseOnEsc, isOpen, onRequestClose, handleRequestClose]);

    // use onAfterOpen
    useEffect(() => {
        if (isOpen && onAfterOpen) onAfterOpen();
    }, [isOpen, onAfterOpen]);

    // Khi modal đóng → gọi onAfterClose sau closeTimeoutMS
    useEffect(() => {
        if (closing && onAfterClose) {
            const timer = setTimeout(() => {
                onAfterClose();
                setClosing(false);
            }, closeTimeoutMS);

            return () => clearTimeout(timer);
        }
    }, [isOpen, closing, onAfterClose, closeTimeoutMS]);

    // add body className
    useEffect(() => {
        if (!isOpen || !bodyOpenClassName) return;
        document.body.classList.add(bodyOpenClassName);

        return () => document.body.classList.remove(bodyOpenClassName);
    }, [isOpen, bodyOpenClassName]);

    // add html className
    useEffect(() => {
        if (!isOpen || !htmlOpenClassName) return;
        document.documentElement.classList.add(htmlOpenClassName);

        return () =>
            document.documentElement.classList.remove(htmlOpenClassName);
    }, [isOpen, htmlOpenClassName]);

    if (!isOpen && !closing) return null;

    const overlayCustom =
        typeof overlayClassName === 'string' && overlayClassName.trim()
            ? overlayClassName
            : styles.overlayDefault;

    const contentCustom =
        typeof className === 'string' && className.trim()
            ? className
            : styles.content;

    return (
        <div className={clsx(styles.modal)}>
            <div className={clsx(styles.contentBase, contentCustom)}>
                {/* Content */}
                <div className={styles.body}>{children}</div>
            </div>

            {/* Overlay */}
            <div
                className={clsx(styles.overlayBase, overlayCustom)}
                onClick={() => {
                    if (shouldCloseOnOverlayClick) handleRequestClose();
                }}
            ></div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    closeTimeoutMS: PropTypes.number,
};

export default forwardRef(Modal);
