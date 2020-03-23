import React from 'react';

import styles from './Switch.module.css'


export default function Switch({ disabled }) {
    return (
        <>
            <div className={styles.container}>
                    <h4 className={styles.h4}>Switch</h4>
                    <input className={styles.input} type="checkbox" 
                    disabled={disabled} />
                    <label className={styles.label}
                    disabled={disabled}></label>
                    <div className={styles.containerDis}>
                        <h5 className={styles.h5}>Disabled</h5>
                        <label className={styles.label}
                        disabled></label>
                        <input className={styles.input} type="checkbox"
                        disabled />
                        <label className={styles.label} style={{ marginLeft: 100 }}
                        checked disabled></label>
                        <input className={styles.input} type="checkbox"
                        checked disabled />
                </div>
            </div>
        </>
    )
}

