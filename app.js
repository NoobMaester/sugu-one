//DECLARING VARIABLES
var getPost = document.getElementById('btn');


//FETCHING USERS FROM API
const getUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);


    let html = "";

    data.forEach((user, index) => {
        let id = index + 1;
        html +=`
        <div id="user">
            <div class="text">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
            </div>
            <button id='btn' onclick = "viewPost(${id})" >Get User's Posts</button>
        </div>
        `;
        document.getElementById('getRequest').innerHTML = html;
        
    });
};
getUser();

const viewPost = (id) => {
    
    window.location.href = 'post.html';
    console.log(`clicked ${id}`);

    
}
const postDisplay = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/8/posts`);
    const posts = await response.json();
    console.log(posts);
    let html1 = "";

    posts.forEach(post => {
    html1 += `
    <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </div>
    `;
    });
    document.getElementById("userPost").innerHTML = html1;

}
postDisplay()
