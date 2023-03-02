class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
        this.intervalId = setInterval(() => {
          if (callback){callback()}
          else {
            this.currentTime++;
          }
        }, 1000)
  }

  getMinutes() {
    //let minutes = 
    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    //let seconds = 
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length == 1){
      valueString = `0${valueString}`
      return valueString
    }
    else {return valueString}

   /* let numIzq = ''
    let numDcha = value.toString().slice(1);
    if (value.length == 1 ){numIzq = '0'}
    else {numIzq = value.toString().slice(-1)}
    return `${numIzq}${numDcha}*/
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return  `${minutes}: ${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
