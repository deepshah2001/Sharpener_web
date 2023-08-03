console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

// Async-Await -> Returns a promise
const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ticket');
        }, 3000);
    });

    const gotSomePopcorn = new Promise((resolve, reject) => {
        resolve('popcorn');
    });

    const needSomeButter = new Promise((resolve, reject) => {
        resolve('butter');
    });

    const gotColdDrinks = new Promise((resolve, reject) => {
        resolve('cold drink');
    });

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: Here is the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: i am hungry');

    let popcorn = await gotSomePopcorn;

    console.log(`husband: I got ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need some butter on it.');

    let butter = await needSomeButter;

    console.log(`husband: I got ${butter} on popcorn`);
    console.log('wife: I need cold drink also.');
    console.log('husband: gotcha');

    let coldDrinks = await gotColdDrinks;

    console.log(`husband: I got ${coldDrinks}. Anything else you need?`);
    console.log('wife: no, we are getting late, we should go in');
    console.log('husband: Thanks for reminding. *gasps*');

    return ticket;
}
preMovie().then((c) => console.log(`Person 3: Shows ${c}`));

Promise.all
const preMovie1 = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const gotSomePopcorn = new Promise((resolve, reject) => {
        resolve('popcorn');
    });

    const needSomeButter = new Promise((resolve, reject) => {
        resolve('butter');
    });

    const gotColdCandy= new Promise((resolve, reject) => {
        resolve('candy');
    });

    const gotColdDrinks = new Promise((resolve, reject) => {
        resolve('cold drink');
    });

    let ticket = await promiseWifeBringingTickets;

    let [popcorn, butter, candy, coke] = await Promise.all([gotSomePopcorn, needSomeButter, gotColdCandy, gotColdDrinks]);

    console.log(`${popcorn} ${butter} ${candy} ${coke}`);

    return ticket;
}
preMovie1().then((c) => console.log(c));

// Error Handling
const preMovie2 = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket');
        }, 3000);
    });

    let ticket;
    try {
        ticket = await promiseWifeBringingTickets;
    } catch(e) {
        ticket = await 'sad face';
    }

    return ticket;
}
preMovie2().then((c) => console.log(`Person 3: Shows ${c}`));

// Promises
const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

let gotSomePopcorn = promiseWifeBringingTickets.then((ticket) => {
    console.log('wife: Here is the ticket');
    console.log('husband: we should go in');
    console.log('wife: i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`${ticket} popcorn`)
    });
});


let needSomeButter = gotSomePopcorn.then((t) => {
    console.log('husband: I got popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need some butter on it.');

    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    });
});

let gotColdDrinks = needSomeButter.then((t) => {
    console.log('husband: I got butter on popcorn');
    console.log('wife: I need cold drink also.');
    console.log('husband: gotcha');

    return new Promise((resolve, reject) => {
        resolve(`${t} cold drink`);
    });
});

gotColdDrinks.then((t) => {
    console.log('husband: I got cold drink too. Anything else you need?');
    console.log('wife: no, we are getting late, we should go in');
    console.log('husband: Thanks for reminding. *gasps*');
    console.log(t);
});

console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');


// Create and Delete post into async-await
let count = 0;

try {
    await createPost();
    let removedPost = await deletePost();
    console.log(removedPost);
} catch(e) {
    console.log(e);
}

const createPost = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post'+count});
            count++;
            resolve();
        }, 2000);
    });
}

const deletePost = async () => {
    return new Promise((resolve, reject) => {
        if(posts.length > 0) {
            let poppeedElement = posts.pop();
            count--;
            resolve(poppedElement);
        } else {
            reject("ERROR");
        }
    });
}