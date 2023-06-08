import React from "react";
import styles from './ShadowBox.module.css'

// login box with shadow
const ShadowBox:React.FC<{children ?: React.ReactNode, className: string, style:object}> = ({children, style, className}) => {
    return (
        <div className={styles.shadowBox + " " + className} style={style}>
            {children}
        </div>
    );
};

export default ShadowBox;
