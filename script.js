
function sum () {
    var x = document.getElementById('xx').value;
    var y = document.getElementById('yy').value;
    var z = x + y;
    document.getElementById('result').innerHTML = "Итого получится" + z;
};

function razn () {
    var x = document.getElementById('xx').value;
    var y = document.getElementById('yy').value;
    var z = x - y;
    document.getElementById('result').innerHTML = "Итого получится" + z;
};

function multi () {
    var x = document.getElementById('xx').value;
    var y = document.getElementById('yy').value;
    var z = x*y;
    document.getElementById('result').innerHTML = "Итого получится" + z;
};

function delen () {
    var x = document.getElementById('xx').value;
    var y = document.getElementById('yy').value;
    var z = x/y;
    document.getElementById('result').innerHTML = "Итого получится" + z;
};

function square () {
    var x = document.getElementById('xx').value;
    var y = document.getElementById('yy').value;
    var z = x**2;
    document.getElementById('result').innerHTML = "Итого получится" + z;
};

document.getElementById('el1').addEventListener('click', sum);
document.getElementById('el2').addEventListener('click', razn);
document.getElementById('el3').addEventListener('click', multi);
document.getElementById('el4').addEventListener('click', delen);
document.getElementById('el5').addEventListener('click', square);



