import React from 'react';

import styles from './Switch.module.css'
import Navigate from './Navigate'


export default function Switch({ disabled }) {
    return (
        <>
            <div className={styles.container}>
                    <h4 className={styles.h4}>Switch</h4>
                    <label 
                    className={styles.switch}
                    disabled={disabled}
                    >
                    <input 
                    className={styles.inputSwitch} 
                    type="checkbox" 
                    disabled={disabled}
                    />
                    <div className={styles.slider}></div>
                    </label>
                <div className={styles.containerDis}>
                    <h5 className={styles.h5}>Disabled</h5>
                    <label
                    className={styles.switchDis}
                    disabled>
                    <input
                    className={styles.inputSwitchDis}
                    type="checkbox"
                    disabled />
                    <div className={styles.sliderDis}></div>
                    </label>
                </div>
            </div>
        </>
    )
}

