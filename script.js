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

