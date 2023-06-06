import styles from './LoginForm.module.css'
import Input from "../Input/Input";
import ShadowBox from "../ShadowBox/ShadowBox";
import Btn from "../Btn/Btn";

const VoroodH3 =  () => {
    return <h3 className={styles.vorood}>ورود</h3>

}
const LoginForm = () => {
    return (
        <ShadowBox style={{width: "22rem", display: "flex", flexDirection: "column",gap: "1rem"}}>
            <VoroodH3 />
            <Input type="text" label="نام کاربری"/>
            <Input type="text" label="کلمه عبور"/>
            <Btn><VoroodH3 /></Btn>
        </ShadowBox>
    );
};

export default LoginForm;
