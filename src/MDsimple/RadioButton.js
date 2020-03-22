import React from 'react';

import styles from './RadioButton.module.css'


export default function RadioButton() {
    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.h4}>Radio button</h4>
                <input className={styles.input} type="radio" id="firstRadioButton" name="selector" />
                <label className={styles.label} htmlFor="firstRadioButton"></label>

                <input className={styles.input} type="radio" id="secondRadioButton" name="selector" />
                <label className={styles.label} htmlFor="secondRadioButton"></label>
                <div className={styles.containerDis}>
                    <h5 className={styles.h5}>Disabled</h5>
                    <input className={styles.inputDis} type="radio" id="firstRadioButton" name="selector" />
                    <label className={styles.labelDis} htmlFor="firstRadioButton"></label>

                    <input className={styles.inputDis} type="radio" id="secondRadioButton" name="selector" />
                    <label className={styles.labelDis} htmlFor="secondRadioButton"></label>
                </div>
            </div>
        </>
    )

}