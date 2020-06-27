function ViewTasks (){ // методы потом будем добавлять через прототипы (будем расширять методами)

};

// добавляем метод (proto в ES6), который описывает HTML-разметку (рендеринг)
ViewTasks.prototype.addTask = function(type) {
    /* '<li>'+ type.title +'</li>' */ // создадим объект от класса Task с одним свойством task для файла task.js
    var listAll = document.querySelector('#List-tasks'); // обратимся к элементу <ol> Список
    var ulList = document.createElement('li'); // тэг который будет создаваться

    ulList.innerHTML = '<li>'+ type.title +'</li>'; // заполним созданный элемент данными (генерируем данные)
    
    listAll.appendChild(ulList);  // вывести сгенерированные данные на страницу (добавить элемент)
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