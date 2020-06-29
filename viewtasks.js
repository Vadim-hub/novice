function ViewTasks (){ // методы потом будем добавлять через прототипы (будем расширять методами)

};

// добавляем метод (proto в ES6), который описывает HTML-разметку (рендеринг)
ViewTasks.prototype.addTask = function(type) {
    /* '<li>'+ type.title +'</li>' */ // создадим объект от класса Task с одним свойством task для файла task.js
    var listAll = document.querySelector('#List-tasks'); // обратимся к элементу <ol> Список
    var ulList = document.createElement('li'); // тэг который будет создаваться

    ulList.innerHTML = '<article>' + type.title + '</article>' + // заполним созданный элемент данными (генерируем данные)
    '<button class="delete">Удалить</button>' +
    '<button class="important">Важное</button>';
          
       
    listAll.appendChild(ulList);  // вывести сгенерированные данные на страницу (добавить элемент)

    document.querySelector('#List-tasks').addEventListener('click', function(e){ // мы ставим один обработчик на общего предка всех элементов (вешаем обработчик клика на UL)
        var id = e.target.id; // // получили ID, т.к. в e.target содержится элемент по которому кликнули
        document.querySelector('li').innerHTML = id;
    });

    document.querySelector(".delete").addEventListener("click", deleteFunction);
    document.querySelector(".important").addEventListener("click", importantFunction);
};

// опишем метод = подсказка ввиде сообщения
ViewTasks.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var input = document.querySelector('#books');

    container.insertBefore(block, input);    
};

// опишем метод = очищение данных
ViewTasks.prototype.clear = function(){
document.querySelector('#title').value = ''; // обращаемся к элементу чтобы получить значение value и очистить поле
};

/* function deleteFunction() {
    let parent = document.querySelector('section');
    let elem = document.querySelector('section');
    
    parent.removeChild(elem);
    }; */

    function deleteFunction() {
        let elem = document.getElementById(ulList.id);
        elem.parentElement.removeChild(elem);
        /* elem.remove(); */
    };

    function importantFunction() {
        ulList.id = "new";
        let elem = document.getElementById("new");
        elem.style.background = 'red';
        /* document.getElementById("new").style.color = "red"; */        
    };      
