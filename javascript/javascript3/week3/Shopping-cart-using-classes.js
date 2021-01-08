class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency){
  const url='https://api.exchangeratesapi.io/latest?base=DKK';
   fetch('https://api.exchangeratesapi.io/latest?base=DKK')
     .then(response => response.json())
     .then(data => {
       console.log(data)
       const currencies = data.rates;
       const convertCurrency = this.price * currencies[currency];
       console.log(convertCurrency.toFixed(2))
     });
   }
}


class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((currentProduct)=>currentProduct != product);
  }

  searchProduct(productName) {
    const searchProducts = this.products.filter((product)=>product.name === productName);
   return searchProducts;
  }

  getTotal() {
    let initialValue = 0;
    const totalPrice =  this.products.reduce((accumulator,currentValue)=>accumulator + currentValue.price,initialValue);
    return totalPrice;
  }

  renderProducts() {
    const cart = document.getElementById('cart');
    //for Product names and prices
    const olTag = document.createElement("ol");
    olTag.textContent = "";
    olTag.textContent = 'Shopping Cart has ' + this.products.length + ' products';
    cart.appendChild(olTag)
    this.products.forEach(product => {
      const name = document.createElement("li");
      name.textContent = `Product : ${product.name}, Price : ${product.price}`;
      olTag.appendChild(name)
  });
  //fot total price of products
  const total = document.createElement('h3');
  total.textContent  = 'Total Price of Items : ' + this.getTotal();
  cart.append(total);
  }

  getUser(){
    const api= 'https://jsonplaceholder.typicode.com/users/1';
    fetch(api)
    .then(response=>response.json())
    .then(data=>
      {
        console.log(data);
        const user = document.getElementById('user');
        user.innerHTML=`User: ${data.username}`;
      });
}
}

//searching the product with product name
/*const input =document.getElementById('searchValue');
input.addEventListener('input' ,()=>{
  const inputValue = input.value;
const ul =document.getElementById('search_results');
ul.innerHTML='';
if(inputValue){
  shoppingCart.searchProduct(productName).forEach((product)=>{
    const li = document.createElement('li');
    li.textContent =`${product.name}:${product.price}`;
    ul.appendChild(li);
  });
}
});
*/

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const tv = new Product("tv", 4000);
const fridge = new Product("fridge", 3000);
const sofa = new Product("sofa", 4000);
const tvBoard = new Product("tv-board", 1000);
const plant = new Product("plant", 50);

//adding products
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(fridge);
shoppingCart.addProduct(sofa);
shoppingCart.addProduct(tvBoard);
shoppingCart.addProduct(plant);

console.log(shoppingCart);
//removing products
shoppingCart.removeProduct(flatscreen);
shoppingCart.removeProduct(tvBoard);
console.log(shoppingCart);

shoppingCart.getTotal();

shoppingCart.renderProducts();

 shoppingCart.getUser();

sofa.convertToCurrency("USD");

shoppingCart.searchProduct('plant');
