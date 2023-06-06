import React from "react";
import styles from './Input.module.css'

const Input: React.FC = (props) => {
    return (
        <div className={styles.input}>
            {props.label !== undefined ? <label>{props.label}</label> : ""}
            <input {...props}/>
        </div>
    );
};

export default Input;
