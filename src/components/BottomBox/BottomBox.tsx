import styles from "./BottomBox.module.css"

const BottomBox = ({children}) => {
    return (
        <div className={styles.requestBox}>{children}</div>
    );
};

export default BottomBox;
