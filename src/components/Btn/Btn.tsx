import React from 'react';
import styles from './Btn.module.css'

// yellow button
const Btn:React.FC = (props) => {
    return (
        <button className={styles.btn} {...props}>
            {props.children}
        </button>
    );
};

export default Btn;
