const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') two ways to seelct the clock id 

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);// har 1 sec baad oo change hunda ravega