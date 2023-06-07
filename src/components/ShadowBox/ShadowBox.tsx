import React from "react";
import styles from './ShadowBox.module.css'
const ShadowBox:React.FC<{children ?: React.ReactNode, className: string, style:object, className: string}> = ({children, style, className}) => {
    return (
        <div className={styles.shadowBox + " " + className} style={style}>
            {children}
        </div>
    );
};

export default ShadowBox;
