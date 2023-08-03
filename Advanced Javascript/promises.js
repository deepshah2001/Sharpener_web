var posts = [{title: 'Post0'}];
var count = 1;
var lastActiveTime;

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActiveTime = new Date();
            console.log(lastActiveTime);
            resolve(lastActiveTime)
        }, 1000);
    });
}

function createPost() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             posts.push({title: 'Post'+count});
            count++;
            updateLastUserActivityTime().then(() => resolve());
         }, 2000);
     })
}

function displayPost() {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < posts.length; i++) {
            console.log(posts[i].title);
        }
    })
}

function deletionPromise() {
    return new Promise((resolve, reject) => {
        if(posts.length > 0) {
            let poppeedElement = posts.pop();
            count--;
            resolve(poppedElement);
        } else {
            reject("ERROR");
        }
    })
}


Promise.all([createPost(), updateLastUserActivityTime()])
    .then(displayPost)
    .then(deletionPromise)
    .then(displayPost)
    .catch(err => console.log(err));