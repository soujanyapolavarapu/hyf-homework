const url = "https://api.github.com/search/repositories?q=user:";
const url1 = `${url}rajanibusani`;
const url2 = `${url}JyothiNandyala`;
const url3 = `${url}sofiiadidovych`;

const promise1 = fetch(url1);
const promise2 = fetch(url2);
const promise3 = fetch(url3);
const promise = [promise1, promise2, promise3];
const promiseAll = Promise.all(promise).then((data) =>
  Promise.all(data.map((result) => result.json()))
);
promiseAll.then((response) => {
  response.forEach((promise) => {
    const ul = document.getElementById("ul");
    const li1 = document.createElement("li");

    // =`response[0].items[0].owner.login}'s repositories:`;
    li1.innerHTML = `${promise.items[0].owner.login}'s repositories`;
    ul.append(li1);

    const li2 = document.createElement("li");
    li2.innerHTML = promise.items[0].name;
    li1.append(li2);
    const br = document.createElement("br");
    li1.append(br);
    const li3 = document.createElement("li");
    li3.innerHTML = promise.items[0].url;
    li2.append(li3);

    console.log(promise.items[1]);
  });
});
