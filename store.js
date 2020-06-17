class Store{
    constructor(){

    };
    
    getProducts(){
        let products = [];
        let productsLcStorage = localStorage.getItem('Store');

        if(productsLcStorage !== null){
            products = JSON.parse(productsLcStorage);
        };
        return products;
    };

    putProduct(id){
        let products = this.getProducts();
        let index = products.indexOf(id);
        let statusProduct; // создадим вспомогательную переменную

        if(index === -1){
            products.push(id);
            statusProduct = true; // товар действительно есть в корзине (true), товар находится там действительно
        } else{
            products.splice(index, 1); // метод splice изменяет содержимое массива (удалить элемент по его индексу)
            statusProduct = false; // нет элемента массива в корзине
        }

    localStorage.setItem('Store', JSON.stringify(products));

    return{
            products: products,
            statusProduct: statusProduct
        }
    }
}

let store = new Store(); // создадим экземпляр чтобы получить доступ к нашим методам