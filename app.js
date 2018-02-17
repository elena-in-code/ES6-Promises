const posts = [
    {title: "Post One", body: "This is post One"},
    {title: "Post Two", body: "This is post Two"}
];

//Using promises
function createPost(post){
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            resolve();
        }, 2000);
    });
}

function getPost(){
    setTimeout(function(){
        let output = "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "Post Three", body: "This is post Three"}).then(getPost);


//Using callbacks
/*function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPost(){
    setTimeout(function(){
        let output = "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "Post Three", body: "This is post Three"}, getPost);*/