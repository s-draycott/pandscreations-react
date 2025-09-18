import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonProps = {
    to?: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, to, variant = 'primary', className, ...props }: ButtonProps) => {
    if (to) {
        return (
            <Link to={to} className={`${styles.btn} ${styles[variant]} ${className || ''}`}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${styles.btn} ${styles[variant]} ${className || ''}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
