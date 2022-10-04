import axios from "axios";

const getUsers = (userId) => {
    return new Promise(async(resolve)=>{

        const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
        resolve(data);
    })

}

const getPosts = (userId) => {
    return new Promise(async(resolve)=>{

        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);
        resolve(data);
    })
}

async function getData(userId) {
    try {
        const users = await getUsers(userId);
        const posts = await getPosts(userId);

        const array = [users,posts]
        return array;
    }catch (e) {
        console.log(e)
    }
}
export default getData;