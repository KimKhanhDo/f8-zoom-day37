import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUser,
    faWindowMaximize,
    faArrowsUpDown,
    faGaugeHigh,
    faBullseye,
    faShapes,
    faCircleNodes,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';

const items = [
    { id: 'home', label: 'Home', icon: faHouse, to: '/' },
    { id: 'profile', label: 'Profile', icon: faUser, to: '/profile' },
    { id: 'modal', label: 'Modal', icon: faWindowMaximize, to: '/modal-demo' },
    { id: 'scroll', label: 'Scroll', icon: faArrowsUpDown, to: '/scroll-demo' },
    {
        id: 'performance',
        label: 'Perform',
        icon: faGaugeHigh,
        to: '/performance-demo',
    },
    { id: 'focus', label: 'Focus', icon: faBullseye, to: '/focus-demo' },
    { id: 'hoc', label: 'HOC', icon: faLayerGroup, to: '/hoc-demo' },
    {
        id: 'render-props',
        label: 'Render Props',
        icon: faShapes,
        to: '/render-props-demo',
    },
    {
        id: 'custom-hooks',
        label: 'Custom Hooks',
        icon: faCircleNodes,
        to: '/custom-hooks-demo',
    },
];

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.list}>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={styles.listItem}
                        >
                            <NavLink
                                to={item.to}
                                className={styles.item}
                            >
                                <span className={styles.item__icon}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </span>
                                <span className={styles.item__label}>
                                    {item.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
