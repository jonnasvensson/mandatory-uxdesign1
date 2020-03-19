import React from 'react';

import styles from './Checkbox.module.css'

export default function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <input className={styles.input} type="checkbox" id="checkboxInput"/>
            <label className={styles.label} for="checkboxInput"></label>
        </div>
    )
}