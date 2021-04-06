//Create a function that has one parameter: resolveAfter.
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function resolvesAfterSetTime(resolveAfter) {
  const promise = new Promise((resolve, reject) => {
    console.log("i am logging first");
    const resolveAfterSecs = resolveAfter * 1000;
    setTimeout(() => {
      resolve();
    }, resolveAfterSecs);
  });
  return promise;
}

//promise way
resolvesAfterSetTime(8).then(() => {
  console.log("I am called asynchronously");
});

//using async await
async function resolvesSetTimeUsingAsyncAwait() {
  try {
    await resolvesAfterSetTime(5);
    console.log("I am called asynchronously using async and await");
  } catch (err) {
    console.log(err);
  }
}
resolvesSetTimeUsingAsyncAwait();
