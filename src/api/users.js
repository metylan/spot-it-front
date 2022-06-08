import axios from "axios";
export async function getUsers() {
    return await axios.get('/users');
}