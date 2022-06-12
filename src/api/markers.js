import axios from "axios";
export async function getMarkers() {
    const res = await axios.get('/markers');
    return res.data;
}
export async function addMarker(lat,lng,nom,com,iduser) {
    await axios.post('/markers',{lat,lng,name:nom,com,user:{id:iduser}})
}