import React from 'react';
import styles from './TextField.module.css'

export default function TextField({ disabled }) {

    return(
        <>
            <div className={styles.div}>
                <input 
                className={styles.input} 
                type="text" 
                disabled={disabled}
                required
                />
                <label 
                className={styles.label}
                disabled={disabled}
                >Title</label>
            </div>
        </>
    )
}