import axios from "./axois";
import {LOGIN_API} from "../constants/API"

// Login req
const Login = async (username: string, password: string) => {
    const {data} = await axios.post(LOGIN_API, {username, password})
    console.log(data)
    if (data.status === 0){
        return ""
    }else if (data.status === 1) {
        return data.data.userToken
    }
}
export default Login