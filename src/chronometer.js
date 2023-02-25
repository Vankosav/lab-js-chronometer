

class Chronometer {
  constructor() {
    this.currentTime = 0, 
    this.intervalId = null;
  }

  /*start(printTimeCallback) {
    
      console.log(currentTime);
      currentTime++;*/

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval( ()=> {
      // Call printTimeCallback every 1000 milliseconds
      if (printTimeCallback) printTimeCallback();
      this.currentTime++;
      console.log(this.currentTime)
    }, 1000);
    // Handle case where current time is negative
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return (("0" + value).slice(-2));
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`
  }
}
