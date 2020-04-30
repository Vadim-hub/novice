
const x  = document.getElementById('xx').value;
const y = document.getElementById('yy').value;

if (true) {
    let sum = (x, y) => x + y;
    document.getElementById('result').innerHTML = sum (x, y);
    document.getElementById('el1').addEventListener('click', sum (x, y));
  };

  if (true) {
    let razn = (x, y) => x - y;
    document.getElementById('result').innerHTML = razn (x, y);
    document.getElementById('el2').addEventListener('click', razn (x, y));
  };

  if (true) {
    let multi = (x, y) => x*y;
    document.getElementById('result').innerHTML = multi (x, y);
    document.getElementById('el3').addEventListener('click', multi (x, y));
  };

  if (true) {
    let delen = (x, y) => x/y;
    document.getElementById('result').innerHTML = delen (x, y);
    document.getElementById('el4').addEventListener('click', delen (x, y));
  };

  if (true) {
    let square = (x, y) => x*2;
    document.getElementById('result').innerHTML = square (x, y);
    document.getElementById('el5').addEventListener('click', square (x, y));
  };

 
