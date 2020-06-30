// опишем связь (описание и функционал), в том числе вызвать описанные ранее методы
document.querySelector('#books').addEventListener('submit', function(event){ // обратились к submit и добавим событие
    var title = document.querySelector('#title').value; // получаем значение из input

    var task = new Task(title); // передаем полученные выше данные в экземпляр класса (создаем новую задачу)
    var viewTask = new ViewTasks(); // создадим экзмпляр класса для ViewTasks (рендер данных)

    viewTask.addTask(task);
    viewTask.clear();
    
    var len = document.querySelector('ul').children.length;
    document.getElementById("counter").innerHTML = len;

    event.preventDefault(); // отменить всплытие чтобы обработчик правильно работал
});


