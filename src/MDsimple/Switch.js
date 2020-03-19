import React from 'react';

import styles from './Switch.module.css'

export default function Switch({ disabled }) {
    return (
        <div>
            <label className={styles.switch}>
                <input className={styles.inputSwitch} type="checkbox" />
                <div className={styles.slider}></div>
            </label>
        </div>
    )
}

