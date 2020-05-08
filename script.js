
let x = document.getElementById('xx');
let y = document.getElementById('yy');

  let sum = (x, y) => {
  let xNew = Number(x.value);
  let yNew = Number(y.value);
  return xNew + yNew;
  };

  /* function sum(x, y){
    let xNew = Number(x.value);
    let yNew = Number(y.value);
    return xNew + yNew;
    };
 */

  let razn = (x, y) => {
  let xNew = Number(x.value);
  let yNew = Number(y.value);
  return xNew - yNew;
 };

  let multi = (x, y) => {
  let xNew = Number(x.value);
  let yNew = Number(y.value);
  return xNew*yNew;
};

  let delen = (x, y) => {
  let xNew = Number(x.value);
  let yNew = Number(y.value);
  return xNew/yNew;
};

 let square = (x, y) => {
  let xNew = Number(x.value);
  let yNew = Number(y.value);
  return xNew**2;
};

document.getElementById('el1').onclick = function() {
alert(sum (x, y));
};

document.getElementById('el2').onclick = function() {
  alert(razn(x, y));
};

document.getElementById('el3').onclick = function() {
  alert(multi(x, y));
};

document.getElementById('el4').onclick = function() {
  alert(delen(x, y));
};

document.getElementById('el5').onclick = function() {
  alert(square(x, y));
};

/* document.getElementById('result').innerHTML = sum (x, y); */
 