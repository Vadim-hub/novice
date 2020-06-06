
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
    /* let elements = document.querySelector('slot');
    elements.remove(); */
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'fruit';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function vegetableSelector() {
    let elements = document.querySelector('slot');
    elements.remove();
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'vegetable';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function berrySelector() {
    let elements = document.querySelector('slot');
    elements.remove();
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'berry';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function priceSelector() {
    let elements = document.querySelector('slot');
    elements.remove();
    catalogProduct2 = catalogProduct2.filter(function(elem) {
    return elem.price > document.getElementById('lowPrice').value && elem.price < document.getElementById('highPrice').value;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}

function priceHigh() {
  let elements = document.querySelector('slot');
  elements.remove();
  catalogProduct2 = catalogProduct2.sort(function(a, b) {
    return a.price - b.price;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}

function priceLow() {
  let elements = document.querySelector('slot');
  elements.remove();
  catalogProduct2 = catalogProduct2.sort(function(a, b) {
  return b.price - a.price;
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
}

function removeAll() {
let elements = document.querySelector('slot');
elements.remove();

return elements;
}


/* function removeAll() {
let elements = berrySelector(); // (3) [{…}, {…}, {…}]
console.log(Array.isArray(elements)); // true
console.log(elements instanceof Array); // true
console.log(elements instanceof Object); // true
console.log(elements instanceof AllProducts); // false
elements = []; // метод обнуления массива

return elements;
}

let z = removeAll() // [] */ 