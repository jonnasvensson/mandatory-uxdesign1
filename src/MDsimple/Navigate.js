import React from 'react';
import { Link } from "react-router-dom";

import styles from './Navigate.module.css'

export default function Navigate() {

    return (
        <>
            <nav>
                <Link className={styles.a} to="/textField">Text field</Link>
                <Link className={styles.a} to="/switch">Switch</Link>
                <Link className={styles.a} to='/checkbox'>Checkbox</Link>
                <Link className={styles.a} to='/radioButton'>Radio Button</Link>
            </nav>
        </>
    )
}