const chronometer = new Chronometer(); // {currentTime: 4}

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  // 1. changer le text START du bouton en STOP (.innerHTML)
  btnLeftElement.innerHTML="STOP";
  // 2. passer le bout en rouge (.className)
 
  btnLeftElement.className= "btn stop";
  //btnLeftElement.style.background = 'red';

});

// Reset/Split Button
btn.startElement.addEventListener('click', () => {
  // ... your code goes here
  btn.StartElement.innerHTML="SPLIT";
  // 2. passer le bout en rouge (.className)
 
  //btnLeftElement.className= "btn st";
  //btnLeftElement.style.background = 'red';

});
