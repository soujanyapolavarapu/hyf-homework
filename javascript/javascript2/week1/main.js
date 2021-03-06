console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
renderProducts(products);


function renderProducts(products) {
  for(let i=0; i<products.length;i++){
    const ul_tag = document.getElementById('ulList');

    const li_element1 = document.createElement('li');
    const h1_element = document.createElement('h1');
    h1_element.innerHTML= products[i].name;
    ul_tag.appendChild(li_element1);
    li_element1.appendChild(h1_element);

    const li_element2 = document.createElement('li');
    li_element2.innerHTML='price: ' + products[i].price;
    ul_tag.appendChild(li_element2);

    const li_element3 = document.createElement('li');
    li_element3.innerHTML='rating: ' + products[i].price;
    ul_tag.appendChild(li_element3);
  }
}
