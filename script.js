function Books(label, year, id, pages){
    this.label = label;
    this.year = year;
    this.id = id;
    this.pages = pages;
    this.getPages = function(){
        return this.pages;
    }
}

function Book(title, author, amount){
    Books.call(this);
    this.title = title;
    this.author = author;
    this.amount = amount; 
}

var book1 = new Book('Tales', 'John', '15');
book1.label = 'Literatura';
book1.year = '2019';
book1.id = '1';
book1.pages = '110';

var book2 = new Book('New tales', 'Ian', '20');
book1.label = 'New literatura';
book1.year = '2020';
book1.id = '2';
book1.pages = '125';

console.log(book1.getPages());
console.log(book2.getPages());

console.log(book1.year);
console.log(book2.year);

function Journal(volume){
    Books.call(this);
    this.volume = volume;
    this.setPages = function (pages){
        if(pages <= 0 || pages >= 100)
        throw "Количество страниц";
        _pages = pages;
    }
    this.getYear = function(){
        return this.year;
    }
}

