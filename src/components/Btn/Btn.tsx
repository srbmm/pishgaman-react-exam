import React from 'react';
import styles from './Btn.module.css'
const Btn:React.FC = (props) => {
    return (
        <button className={styles.btn} {...props}>
            {props.children}
        </button>
    );
};

export default Btn;
