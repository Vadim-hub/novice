let name = document.getElementById('name');
let surname = document.getElementById('surname');
let secondName = document.getElementById('secondName');
let age = document.getElementById('age');
let profAge = document.getElementById('profAge');
let date = document.getElementById('date');


function someFunction(){
    let nameNew = document.getElementById('n');
    nameNew.innerHTML = name.value;
    let surnameNew = document.getElementById('s');
    surnameNew.innerHTML = surname.value;
    let secondNameNew = document.getElementById('sn');
    secondNameNew.innerHTML = secondName.value;
    let ageNew = document.getElementById('a');
    ageNew.innerHTML = age.value;
    let profAgeNew = document.getElementById('pa');
    profAgeNew.innerHTML = profAge.value;
    let dateNew = document.getElementById('d');
    dateNew.innerHTML = date.value;
    }
    document.onclick = someFunction;
    


function myFunction1() {
    var newLine = document.createElement("tr");
    newLine = document.getElementById("myTD");
    /* var textnode = document.getElementById("myTD");
    newLine.appendChild(textnode); */
    /* var textnode = document.createTextNode("Water"); */
    /* newLine.innerHTML = "Дарэчы новы параграф"; */
    document.getElementById("myTable").appendChild(newLine);
    }

    function myFunction2() {
    var element = document.getElementById("myTable");
    document.getElementById("myTable").removeChild(element.lastChild);
  }
  








/* var ulSpisok = document.getEletById("table");

inputData.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13){
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
        newSpan.innerHTML = "Delete";

        var newTodo = this.value; /* вспомогательная переменная - Получение value из input */
        /* this.value = ""; /* Очистка поля ввода (пустая строка) */

        /* ulSpisok.appendChild(newLi).append(newSpan, newTodo);
    }
});


ulSpisok.appendChild(newTr).append(newTr, newTodo);
    }
});

document.getElementById('table').appendChild(tr); */ 
