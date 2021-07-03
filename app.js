
//FETCHING USERS FROM API
const getUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);


    let html = "";

    data.forEach((user, index) => {
        let id = index + 1;
        html +=`
        <div class="users">
            <h5>User ${user.id}</h5>
            <div id="user">
                <div class="text">
                    <h4>${user.name}</h4>
                    <p>${user.email}</p>
                </div>
                <a id='btn' onclick = "viewPost(${id})" >Get User's Posts</a>
            </div>
        </div>
        `;
        document.getElementById('getRequest').innerHTML = html;
    });
};
getUser();

const viewPost = async (id) => {
    console.log(`${id} clicked`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const posts = await response.json();
    console.log(posts);
    
    let html1 = "";

    posts.forEach(post => {
    html1 += `
    <div class="post">
        <h5>Article ${post.id}</5>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </div>
    `;

    });
    document.getElementById("getRequest").innerHTML = html1;    
}
