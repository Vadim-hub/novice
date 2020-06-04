
function myFunction1() {
    allFruits = catalogProduct.map(function(elem){
        return {
            id: elem.id,
            name: elem.name,
            img: elem.img,
            price: elem.price
        }
    })
    console.log(allFruits);
    return allFruits;
  }

  let getValue = document.getElementById('setValue');

  function searchFunction() {
  exampleArr = catalogProduct.filter(function(elem) {
  return elem.name == getValue.value;
})
console.log(exampleArr);
let searchProducts = new AllProducts('.container_products2', exampleArr, '.catalog_counter2');
return exampleArr
}

  function fruitSelector() {
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'fruit';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function vegetableSelector() {
    /* let elements = document.querySelector('.container_products2');
    elements.remove; */
    catalogProduct3 = catalogProduct.filter(function(elem) {
    return elem.category == 'vegetable';
})
console.log(catalogProduct3);
let searchProducts = new AllProducts('.container_products2', catalogProduct3, '.catalog_counter2');
return catalogProduct3
  }

  function berrySelector() {
    catalogProduct4 = catalogProduct.filter(function(elem) {
    return elem.category == 'berry';
})
console.log(catalogProduct4);
let searchProducts = new AllProducts('.container_products2', catalogProduct4, '.catalog_counter2');
return catalogProduct4
  }

  function priceSelector() {
    catalogProduct5 = catalogProduct.filter(function(elem) {
    return elem.price > document.getElementById('lowPrice').value && elem.price < document.getElementById('highPrice').value;
})
console.log(catalogProduct5);
let searchProducts = new AllProducts('.container_products2', catalogProduct5, '.catalog_counter2');
return catalogProduct5
}

function priceHigh() {
  catalogProduct6 = catalogProduct2.sort(function(a, b) {
    return a.price - b.price;
})
console.log(catalogProduct6);
let searchProducts = new AllProducts('.container_products2', catalogProduct6, '.catalog_counter2');
return catalogProduct6
}

function priceLow() {
  catalogProduct7 = catalogProduct.sort(function(a, b) {
  return b.price - a.price;
})
console.log(catalogProduct7);
let searchProducts = new AllProducts('.container_products2', catalogProduct7, '.catalog_counter2');
return catalogProduct7
}



  function removeAll() {
  let elements = document.querySelector('.container_products2');
  elements.remove
}




 
/* let searchProducts = []; */
/* let searchProducts = ''; */
/* window.location.reload(); */
/* window.localStorage.clear(); */
/* window.sessionStorage.clear(); */
/* storage.clear(); */
/* sessionStorage.removeItem("searchProducts");
localStorage.removeItem("searchProducts"); */
