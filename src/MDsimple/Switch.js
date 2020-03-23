import React from 'react';

import styles from './Switch.module.css'


export default function Switch({ disabled }) {
    return (
        <>
            <div className={styles.container}>
                    <h4 className={styles.h4}>Switch</h4>
                    <label 
                    className={styles.label}
                    disabled={disabled}
                    >
                    <input 
                    className={styles.input} 
                    type="checkbox" 
                    disabled={disabled}
                    />
                    <div className={styles.slider}></div>
                    </label>
                <div className={styles.containerDis}>
                    <h5 className={styles.h5}>Disabled</h5>
                    <label
                    className={styles.label}
                    disabled>
                    <input
                    className={styles.input}
                    type="checkbox"
                    disabled />
                    <div className={styles.slider}></div>
                    </label>
                </div>
            </div>
        </>
    )
}

