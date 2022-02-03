async function getUser(user){

    try{

        let response = await fetch(`https://api.github.com/users/${user}`);
        let data = await response.json();
        // console.log("data:",data)
        return data ;
        
    }
    catch (error){
        console.log("error :", error)
    }

}

export default getUser;