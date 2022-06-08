import axios from "axios";
export async function getMarkers() {
    const res = await axios.get('/markers');
    return res.data;
}