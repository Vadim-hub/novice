
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
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'vegetable';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function berrySelector() {
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'berry';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function priceSelector() {
    catalogProduct2 = catalogProduct2.filter(function(elem) {
    return elem.price > document.getElementById('lowPrice').value && elem.price < document.getElementById('highPrice').value;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}

function priceHigh() {
  catalogProduct2 = catalogProduct2.sort(function(a, b) {
    return a.price - b.price;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}

function priceLow() {
  catalogProduct2 = catalogProduct2.sort(function(a, b) {
  return b.price - a.price;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}



  function removeAll() {
  let elements = document.querySelector('.container_products2');
  elements.remove
}


function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Привет", "Джон");

 
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Promise whoops!")), 1500);
}); // reject запустит вторую функцию, переданную в .then
promise.then(
  result => alert(result), // не будет запущена
  error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
);



/* let searchProducts = []; */
/* let searchProducts = ''; */
/* window.location.reload(); */
/* window.localStorage.clear(); */
/* window.sessionStorage.clear(); */
/* storage.clear(); */
/* sessionStorage.removeItem("searchProducts");
localStorage.removeItem("searchProducts"); */
