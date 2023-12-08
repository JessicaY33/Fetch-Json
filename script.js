async function getData()  //returns data from the website
{
    try{
        //Post Information
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts'); //gets the information from outside
        let data = await response.json(); //converts to a js object so that the html can return and modify the data
        console.log(data);  //returns the array data to the console
        createPost(data); //displays the data on the webpage
    }catch(error){ //just in case there is an error when displaying the data
        console.log(error); 
    }
}

function createPost(obj)  //returns data from the website
{ 
    let users = obj; //variable holding the data

    const posts = users.map(account =>{ //this creates a post for each element in the array from the data
        return `<div>
        <h2>#${account.id}</h2>
        <h3>${account.title}</h3>
        <p>${account.body}</p>
        </div>`;
    })
    document.getElementById("Post Board").innerHTML = posts; //Stores the posts into a div to better design the website
}

getData(); //activates the function to collect data and display it
