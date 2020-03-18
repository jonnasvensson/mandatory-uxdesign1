import React from 'react';
import styles from './TextField.module.css'

export default function TextField({ disabled }) {

    return(
        <>
            <div>
                <input 
                className={styles.input} 
                type="text" 
                disabled={disabled}
                />
                <label 
                className={styles.label}>Title</label>
            </div>
        </>
    )
}