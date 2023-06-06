import React from "react";
import styles from './ShadowBox.module.css'
const ShadowBox:React.FC<{children ?: React.ReactNode, className: string, style:object}> = ({children, style}) => {
    return (
        <div className={styles.shadowBox} style={style}>
            {children}
        </div>
    );
};

export default ShadowBox;
