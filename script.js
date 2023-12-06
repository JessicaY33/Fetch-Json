async function getData(){ //returns data from the website
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        let data = await response.json();
        // let txt = await response.text();
        // let obj = await JSON.parse(txt);

        console.log(data);
        createPost(data);
    }catch(error){
        console.log(error);
    }
}

function createPost(obj){
    let users = obj;
    let x = 1;
    for(const account of users){
        const id = document.createElement("h2");
        const title = document.createElement("h3");
        const body = document.createElement("p");

        id.textContent = account.id;
        title.textContent = account.title;
        body.textContent = account.body;

        document.getElementById("Post" + x).appendChild(id);
        document.getElementById("Post" + x).appendChild(title);
        document.getElementById("Post" + x).appendChild(body);
        x++;
    }
}

getData();
