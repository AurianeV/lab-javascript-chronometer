class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0
    this.intervalId=null
  }

  start(callback) {
    // ... your code goes here
    // toutes les sec augmente currrentTime de 1
    
      /*function minuter(seconds){
        setTimeout(function(){

        }, 1000)
        counter +=1;
      
      } */
      const callback = function () {
        console.log(counter);
        setTimeout(callback, 1000);
       
        counter += 1;
      };
  }  

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
