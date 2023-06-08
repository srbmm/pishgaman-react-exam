import styles from './LoginForm.module.css'
import Input from "../Input/Input";
import ShadowBox from "../ShadowBox/ShadowBox";
import Btn from "../Btn/Btn";
import React, {useState} from "react";

// Vorood Word
const VoroodH3 = () => {
    return <h3 className={styles.vorood}>ورود</h3>

}

// Login Form
const LoginForm:React.FC  = ({onSubmit}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <ShadowBox style={{width: "22rem"}}>
            <VoroodH3/>
            <form
                className={styles.form}
                onSubmit={e => {
                e.preventDefault();
                if (username && password){
                    onSubmit({username, password})
                }
            }}>
                <Input type="text" onChange={e => setUsername(e.target.value)} label="نام کاربری"/>
                <Input type="password" onChange={e => setPassword(e.target.value)} label="کلمه عبور"/>
                <Btn><VoroodH3/></Btn>
            </form>
        </ShadowBox>
    );
};

export default LoginForm;
