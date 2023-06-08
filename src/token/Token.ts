const ID = "login_exam"
const getToken = () =>{
    const Token = localStorage.getItem(ID)
    if (Token) return Token
    else return ""
}
const setToken = (token: string) =>{
    localStorage.setItem(ID, token)
}
export {getToken, setToken}