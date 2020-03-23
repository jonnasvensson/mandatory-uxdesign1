import React from 'react';

import styles from './Switch.module.css'


export default function Switch({ disabled }) {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.circle}></div>

            <h4 className={styles.h4}>Switch</h4>
                <div className={styles.topContainer} >
                    <input className={styles.input} type="checkbox"
                        disabled={disabled} />
                    <label className={styles.label}
                        disabled={disabled}></label>
                </div>
                <h5 className={styles.h5}>Disabled</h5>
                <div className={styles.containerDis}>
                    <label className={styles.label}
                        disabled></label>
                    <input className={styles.input} type="checkbox"
                        disabled />
                    <label className={styles.label} 
                        checked disabled></label>
                    <input className={styles.input} type="checkbox"
                        checked disabled />
                </div>
            </div>
        </>
    )
}

