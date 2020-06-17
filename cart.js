class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }

    createCart(){
this.catalogCounter.addEventListener('click', function(){ // обращаемся к объекту cart
cart.containerCart.style.display = 'block';
let productsCart = cart.getProductCart();
let wrapper = document.createElement('slot');
wrapper.className = 'wrapper_cart';
for(let i = 0; i < productsCart.length; i++){
    let item = createProduct.getProductItem({ // this - это объект, на который ссылаемся (можно заменять на объект, которому принадлежит, тоже самое)
        nameTag: 'div',
        nameClass: 'item'
    });
    let name = createProduct.getProductItem({
        nameTag: 'div',
        nameClass: 'name',
        contentText: productsCart[i].name
    });
    let img = createProduct.getProductItem({
        nameTag: 'div',
        nameClass: 'image',
        bgImage: `url('${productsCart[i].img}')`
    });
    let price = createProduct.getProductItem({
        nameTag: 'div',
        nameClass: 'price',
        contentText: productsCart[i].price
    });

    item.appendChild(name);
    item.appendChild(img);
    item.appendChild(price);
    wrapper.appendChild(item);
};

let close = createProduct.getProductItem({
    nameTag: 'div',
    nameClass: 'close', // fa - найти на сайте (добавить красивую картинку)
    contentText: 'X'
});

close.addEventListener('click', function(){
    cart.containerCart.style.display = 'none';
    cart.containerCart.innerHTML = '';
});

cart.containerCart.appendChild(wrapper);
cart.containerCart.appendChild(close);

});
}

    getProductCart(){
        let products = store.getProducts();
        let productsInCart = [];

        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsInCart.push(this.catalogProduct[i]);
            }
        };

        return productsInCart;
}
}

let cart = new Cart('.container_cart', '.catalog_counter', catalogProduct);