const posts = [
    {post: "1. post"}, {post: "2. post"}
];

const listPost = () => {
    posts.map(gonderi => {
        console.log(gonderi.post);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject)=> {
        posts.push(newPost);
       //resolve(posts);
        reject("Bir hata var");
    })
    return promise1;
}
addPost({post:"4. post"})
    .then(()=> {
        console.log("Yeni post listesi");
        listPost();
    }).catch((error) => {
        console.log(error);
    })