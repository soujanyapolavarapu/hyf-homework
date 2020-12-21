//I should add 1 button and 2 input elements in innerHTML

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchGiphy');
const numberInput = document.getElementById('numberInput');
const gifImages = document.getElementById('gifImages');
let giphyUrl;  // = 'https://api.giphy.com/v1/gifs/search?api_key=7edjkN5jweck1wGlOGkjTro2jChTI53o&q=&limit=25&offset=0&rating=g&lang=en';
                     https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${inputSearchValue}&limit=25

function getGiphy(){
  fetch(giphyUrl)
  .then(response=>response.json())
  .then(gifData=>{
  //  console.log(gifData);
    gifData.data.forEach(gify=>{
      const image= document.createElement('img');
      const br =document.createElement('br');
      image.setAttribute('src',`${gify.images.fixed_width.url}`);
      gifImages.appendChild(image);
      gifImages.appendChild(br);
    });
});
}


function searchGiphy(){
  gifImages.innerHTML='';
  const searchValue = searchInput.value;
 giphyUrl= `https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${searchValue}&limit=25`;
getGiphy();
}

function numberOfGiphys(){
  gifImages.innerHTML='';
  const searchValue = searchInput.value;
  let numberOfGifs = numberInput.value;
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${searchValue}&limit=${numberOfGifs}`;
  fetch(giphyUrl)
  .then(response=>response.json())
  .then(gifData=>{
  //  console.log(gifData);
    gifData.data.forEach(gify=>{
      const image= document.createElement('img');
      const br =document.createElement('br');
      image.setAttribute('src',`${gify.images.fixed_width.url}`);
      gifImages.appendChild(image);
      gifImages.appendChild(br);
    });
});
}






searchButton.addEventListener('click', searchGiphy);
numberInput.addEventListener('input', numberOfGiphys);
