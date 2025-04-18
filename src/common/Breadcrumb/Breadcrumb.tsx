import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
    <nav className={styles.breadcrumb}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        {pathnames.map((name, index) => {
            const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
            const isLast = index === pathnames.length - 1;

            const formatted = name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
            <span key={index}>
                <span className={styles.separator}> / </span>
                {isLast ? (
                <span className={styles.current}>{formatted}</span>
                ) : (
                <NavLink to={routeTo} className={styles.link}>
                    {formatted}
                </NavLink>
                )}
            </span>
            );
        })}
    </nav>
    );
};

export default Breadcrumb;
