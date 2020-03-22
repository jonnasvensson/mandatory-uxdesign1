import React from 'react';

import styles from './Checkbox.module.css'


export default function Checkbox({ disabled }) {
    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.h4}>Checkbox</h4>
                <div className={styles.checkbox}>
                    <input className={styles.input}
                        type="checkbox" id="checkboxInput"
                        disabled={disabled} />
                    <label className={styles.label}
                        htmlFor="checkboxInput"></label>
                </div>

                <div className={styles.containerDis}>
                    <h5 className={styles.h5}>Disabled</h5>
                    <div className={styles.checkboxContainer}>
                        <div className={styles.checkbox}>
                            <input className={styles.input}
                                type="checkbox"
                                id="checkboxInput"
                                checked
                                disabled
                            />
                            <label className={styles.label}
                                htmlFor="checkboxInput"
                                disabled
                            >
                            </label>
                        </div>
                        <div className={styles.checkbox}>
                            <input
                                className={styles.input}
                                type="checkbox"
                                id="checkboxInput"
                                disabled
                            />
                            <label className={styles.label}
                                htmlFor="checkboxInput"
                                disabled
                            >
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}