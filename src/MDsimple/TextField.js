import React from 'react';

import styles from './TextField.module.css'

export default function TextField({ disabled }) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.circle}></div>
                <h4 className={styles.h4}>Text field</h4>
                <div className={styles.topContainer} >
                    <input className={styles.input}
                        type="text"
                        disabled={disabled}
                        required />
                    <label className={styles.label}
                        disabled={disabled}>
                        Label
                </label>
                </div>
                <div className={styles.containerTextFieldDis}>
                    <h5 className={styles.h5}>Disabled</h5>
                    <input className={styles.input}
                        type="text"
                        disabled
                        required />
                    <label className={styles.label}
                        disabled >
                        Label
                    </label>
                </div>
            </div>
        </>
    )
}