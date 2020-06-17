  let getValue = document.getElementById('setValue');

  function searchFunction() {
    if (document.querySelector('slot')){
      let elements = document.querySelector('slot');
      elements.remove();
    }
    exampleArr = catalogProduct.filter(function(elem) {
  return elem.name == getValue.value;
})
console.log(exampleArr);
let searchProducts = new AllProducts('.container_products2', exampleArr, '.catalog_counter2');
return exampleArr
}

  function fruitSelector() {
    if (document.querySelector('slot')){
      let elements = document.querySelector('slot');
      elements.remove();
    }
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'fruit';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function vegetableSelector() {
    if (document.querySelector('slot')){
    let elements = document.querySelector('slot');
    elements.remove();
  }
    catalogProduct2 = catalogProduct.filter(function(elem) {
    return elem.category == 'vegetable';
})
console.log(catalogProduct2);
let searchProducts = new AllProducts('.container_products2', catalogProduct2, '.catalog_counter2');
return catalogProduct2
  }

  function berrySelector() {
    if (document.querySelector('slot')){
      let elements = document.querySelector('slot');
      elements.remove();
    }
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

function myFruits() {
  catalogProduct3 = catalogProduct.filter(function(elem) {
  return elem.category == 'fruit';
})
console.log(catalogProduct3);
let searchProducts = new AllProducts('.container_products3', catalogProduct3, '.catalog_counter3');
return catalogProduct3
}

function myVegetables() {
  catalogProduct3 = catalogProduct.filter(function(elem) {
  return elem.category == 'vegetable';
})
console.log(catalogProduct3);
let searchProducts = new AllProducts('.container_products3', catalogProduct3, '.catalog_counter3');
return catalogProduct3
}

function myBerries() {
  catalogProduct3 = catalogProduct.filter(function(elem) {
  return elem.category == 'berry';
})
console.log(catalogProduct3);
let searchProducts = new AllProducts('.container_products3', catalogProduct3, '.catalog_counter3');
return catalogProduct3
}

function blogFunction() {
  var text = document.getElementById("story").value;
  var ListHome = document.querySelector('#List-books');
  var uList = document.createElement('section');
  uList.innerHTML = text;
  ListHome.appendChild(uList);
  document.getElementById('story').value = '';
}