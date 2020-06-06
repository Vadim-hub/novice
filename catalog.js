class AllProducts{
    constructor(containerProducts, catalogProducts, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    };

    /* <div class="item">
    <div class="name">Product1</div>
    <div class="image"></div>
    <div class="price">111</div>
    <button class="btn">В корзину</button>
    </div> */

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for (let i = 0; i < this.catalogProducts.length; i++){
            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;

            if(index == -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'image',
                bgImage: `url('${this.catalogProducts[i].img}')`
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                contentText: this.catalogProducts[i].price
            });
            let btn = createProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                contentText: activeText,
                id: this.catalogProducts[i].id
            });
            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    };
}

let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');