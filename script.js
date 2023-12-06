async function getData()  //returns data from the website
{
    try{
        //Post Information
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        let data = await response.json();
        console.log(data);  
        createPost(data);
    }catch(error){
        console.log(error);
    }
}

function createPost(obj)  //returns data from the website
{ 
    let users = obj;
    const posts = users.map(account =>{
        return `<div>
        <h2>${account.id}</h2>
        <h3>${account.title}</h3>
        <p>${account.body}</p>
        </div>`;
    })
    document.getElementById("Post Board").innerHTML = posts;
}

getData();
