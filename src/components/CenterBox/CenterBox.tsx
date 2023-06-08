import React from "react";
import styles from './CenterBox.module.css'

// make center the children with flex
const CenterBox:React.FC<{children ?: React.ReactNode, className: string, style:object}> = ({children, style}) => {
    return (
        <div className={styles.centerBox} style={style}>
            {children}
        </div>
    );
};

export default CenterBox;
