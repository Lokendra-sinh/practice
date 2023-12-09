/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(`Promise is resolved after ${n} seconds`);
        }, n * 1000)
    })
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('please enter value of n\n', (answer) => {
    wait(answer).then(result => console.log(result));
    rl.close();
});




// alternate way to get the input directly from the CLI by passing the index of the input in argv. 
// const userInput = process.argv[2];
// wait(userInput).then(result => console.log(result));
