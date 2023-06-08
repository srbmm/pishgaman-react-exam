import {CenterBox, LoginForm} from '../../components'
import LoginReq from "../../axios/Login";
import {setToken} from "../../token/Token";
import {toast} from "react-toastify";
import React from "react";
// Login Page
const Login:React.FC = ({setIsLogin}) => {
    return (
        <CenterBox>
            <LoginForm onSubmit={async (data) => {
                const token = await LoginReq(data.username, data.password)
                if(token){
                    toast.success("با موفقیت وارد شدید.")
                    setIsLogin(true)
                    setToken(token)
                }
            }}/>
        </CenterBox>
    );
};

export default Login;
