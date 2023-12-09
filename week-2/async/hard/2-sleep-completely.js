/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliSeconds) {

    console.log("pausing the js thread");

    const startTime = new Date().getTime();
    let currentTime = startTime;

    while( currentTime - startTime < milliSeconds ){
        currentTime = new Date().getTime();
    }

  console.log("resuming the js thread");
}

const milliSeconds = process.argv[2];
sleep(milliSeconds);