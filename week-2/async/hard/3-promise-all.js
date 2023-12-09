/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function resolveAllPromises() {
  const allPromises = [waitOneSecond(1), waitTwoSecond(2), waitThreeSecond(3)];

  Promise.all(allPromises)
    .then((results) => results.forEach((result) => console.log(result)))
    .catch((error) => console.error("At least one promise rejected:", error))
    .finally(() => {
        console.log("time taken for all 3 promises to get resolved is: ", (new Date().getTime() - startTime) / 1000 );
    })

   
}

const startTime = new Date().getTime();
resolveAllPromises();


