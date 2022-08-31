import axios from "axios";

export async function usersFight(firstUser: string, secondUser: string){
    const firstUserData = await axios.get(`https://api.github.com/users/${firstUser}/starred`);
    const secondUserData = await axios.get(`https://api.github.com/users/${secondUser}/repos`);
    return [firstUserData.data, secondUserData.data]
}