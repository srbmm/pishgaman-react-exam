import styles from "./BottomBox.module.css"
import React from "react";

// go to the bottom div
const BottomBox:React.FC = ({children}) => {
    return (
        <div className={styles.requestBox}>{children}</div>
    );
};

export default BottomBox;
