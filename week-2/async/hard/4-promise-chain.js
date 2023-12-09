/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */



function waitOneSecond(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Promise is resolved after 1 second`);
    }, n * 1000);
  });
}

function waitTwoSecond(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Promise is resolved after 2 seconds`);
    }, n * 1000);
  });
}

function waitThreeSecond(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Promise is resolved after 3 seconds`);
    }, n * 1000);
  });
}

function printTotalTime(){
    console.log("total time taken is: ", (new Date().getTime() - startTime) / 1000);
}


function customPromiseAll(){

    waitOneSecond(1)
    .then(() => waitTwoSecond(2))
    .then(() => waitThreeSecond(3))
    .then(() => printTotalTime());
    
}

const startTime = new Date().getTime();
customPromiseAll();


//comparing 3 and 4, we observed that Promise.all takes less time to resolve all three promises this is because while sequentially exeucting promises, we are waiting for the promise to get resolved and only then we're moving onto the next promise.
//promise.all involves parallelism while promise-chain involves sequential execution.