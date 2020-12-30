/*Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await
The 3 steps:

Wait 3 seconds
After 3 seconds fetch some data from any api you like
Log out the data from the api
Which way do you prefer, the promise way or the async/await way?*/

const astronautApi = 'http://api.open-notify.org/astros.json';
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve();
  }, 3000);
});

promise.then(()=>{
  fetch(astronautApi)
.then(response=>response.json())
.then((data)=>console.log(data))
});


async function astronaut(){
  try{
    await promise;
  const astroResponse = await fetch(astronautApi);
    const astronauts= await astroResponse.json();
    console.log(astronauts.number);
  }
  catch(err){
    console.log(err);
  }
}
astronaut();
//i prefer .then way because i understand easily and it took less code.
