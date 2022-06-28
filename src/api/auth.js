import axios from "axios";
export async function login(user) {
    const res = await axios.get("/auth",{
        auth:{
            username:user.mail,
            password:user.password
        }
    })
    localStorage.setItem("token",res.data.access_token);
    localStorage.setItem("tokenRefresh",res.data.refresh_token);
    axios.defaults.headers.common["Authorization"]=`Bearer ${res.data.access_token}`
}
export async function register(form){
    await axios.post("/users",form);
    await login(form);
}
export function isConnect(){
    return localStorage.getItem("token")?true:false
}