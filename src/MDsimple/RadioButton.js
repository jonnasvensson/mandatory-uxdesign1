import React from 'react';

import styles from './RadioButton.module.css'


export default function RadioButton({ disabled }) {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.circle}></div>
            <h4 className={styles.h4}>Radio button</h4>
                <div className={styles.topContainer} >
                    <input className={styles.input} type="radio" id="firstRadioButton" name="selector" />
                    <label className={styles.label} htmlFor="firstRadioButton"></label>
                    <input className={styles.input} type="radio" id="secondRadioButton" name="selector" />
                    <label className={styles.label} htmlFor="secondRadioButton"></label>
                </div>
                <h5 className={styles.h5}>Disabled</h5>
                    <div className={styles.containerDis}>
                        <input className={styles.input}
                            type="radio"
                            disabled />
                        <label className={styles.label}
                            disabled>
                        </label>
                        <input className={styles.input}
                            type="radio"
                            checked
                            disabled />
                        <label className={styles.label}
                            checked
                            disabled>
                        </label>

                    </div>
                </div>
        </>
    )

}