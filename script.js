
class Employee {
    constructor(name, surname, secondName, age, profAge, date) {
        this.name = name;
        this.surname = surname;
        this.secondName = secondName;
        this.age = age;
        this.profAge = profAge;
        this.date = date;
    }
     
    get name() {
        return this.name = document.getElementById('name');
    } 
    set name(value) {
        let nameNew = document.getElementById('nam');
        nameNew.innerHTML = name.value;
    }
    get surname() {
        return this.surname = document.getElementById('surname');
    }
    set surname(value) {
        let surnameNew = document.getElementById('sur');
        surnameNew.innerHTML = surname.value;
    }
    get secondName() {
        return this.secondName = document.getElementById('secondName');
    }
    set secondName(value) {
        let secondNameNew = document.getElementById('sn');
        secondNameNew.innerHTML = secondName.value;
    }
    get age() {
        return this.age = document.getElementById('age');
    }
    set age(value) {
        let ageNew = document.getElementById('ag');
        ageNew.innerHTML = age.value;
    }
    get profAge() {
        return this.profAge = document.getElementById('profAge');
    }
    set profAge(value) {
        let profAgeNew = document.getElementById('pa');
        profAgeNew.innerHTML = profAge.value;
    }
    get date() {
        return this.date = document.getElementById('date');
        }
    set date(value) {
        let dateNew = document.getElementById('dat');
        dateNew.innerHTML = date.value;
    }
    }

class Worker extends Employee {
    constructor(name, surname, secondName, age, profAge, date, prof, spec) {
    super(name, surname, secondName, age, profAge, date);
    this.prof = prof;
    this.spec = spec;
    }
    get prof() {
        return this.prof = document.getElementById('prof');
    } 
    set prof(value) {
        let profNew = document.getElementById('pr2');
        profNew.innerHTML = prof.value;
    }
    get spec() {
        return this.spec = document.getElementById('spec');
    }
    set spec(value) {
        let specNew = document.getElementById('sp2');
        specNew.innerHTML = spec.value;
    }
      
}

document.getElementById('btn').addEventListener('click', () =>{
    let employee = new Employee(); 
    alert('Вы добавили нового работника');
    var p = document.getElementById("newTD");
    var p_prime = p.cloneNode(true);
    document.getElementById("myTable").appendChild(p_prime);
    this.name.value = "";
    this.surname.value = "";
    this.secondName.value = "";
    this.age.value = "";
    this.profAge.value = "";
    this.date.value = "";    
});

document.getElementById('btn2').addEventListener('click', () =>{
    let worker = new Worker(); 
    alert('Вы добавили нового специалиста');;
    var w = document.getElementById("myTD");
    var w_prime = w.cloneNode(true);
    document.getElementById("newTable").appendChild(w_prime);
    this.name.value = "";
    this.surname.value = "";
    this.secondName.value = "";
    this.age.value = "";
    this.profAge.value = "";
    this.date.value = "";
    this.prof.value = "";
    this.spec.value = "";    
});


    function myFunction2() {
    var element = document.getElementById("myTable");
    document.getElementById("myTable").removeChild(element.lastChild);
  }

  function myFunction3() {
    var element = document.getElementById("newTable");
    document.getElementById("newTable").removeChild(element.lastChild);
  }
      