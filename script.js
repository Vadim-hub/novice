function Books(label, year, id, pages){
    this.label = label;
    this.year = year;
    this.id = id;
    this.pages = pages;
    this.getPages = function(){
        return this.pages;
    };
};

function Book(title, author, amount){
    Books.call(this);
    this.title = title;
    this.author = author;
    this.amount = amount; 
};

var book1 = new Book('Tales', 'John', '15');
book1.label = 'Literatura';
book1.year = '2019';
book1.id = '1';
book1.pages = '110';

var book2 = new Book('New tales', 'Ian', '20');
book2.label = 'New literatura';
book2.year = '2020';
book2.id = '2';
book2.pages = '125';

console.log(book1.getPages());
console.log(book2.getPages());

console.log(book1.year);
console.log(book2.year);

function Journal(volume){
    Books.call(this);
    this.volume = volume;
    this.setPages = function (pages){
        if(pages <= 0 || pages >= 32)
        throw "Количество страниц не более 32";
        _pages = pages;
    };
    this.getPages = function (){
        return _pages;
    };
    this.getYear = function(){
        return this.year;
    };
};

var journal1 = new Journal('№ 11');
journal1.label = 'Print';
journal1.year = '2001';
journal1.id = '382';
journal1.pages = '28';

var journal2 = new Journal('№ 12');
journal2.label = 'New print';
journal2.year = '2004';
journal2.id = '301';
journal1.pages = '35';

console.log(journal1.volume);
console.log(journal2.volume);

console.log(journal1.label);
console.log(journal2.label);

console.log(journal1.getYear());
console.log(journal2.getYear());

console.log(journal1.getPages());
console.log(journal2.getPages());
