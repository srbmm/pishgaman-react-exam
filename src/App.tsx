import './App.css';
import {Login, Request} from "./pages";
import {useEffect, useState} from "react";
import {getToken} from "./token/Token";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const token = getToken()
        if (token) {
            setIsLogin(true)
        }
    }, [])
    if (isLogin) return (<>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        /><Request setIsLogin={setIsLogin}/>
    </>)
    else return (<>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <Login setIsLogin={setIsLogin}/>
    </>)

}

export default App;