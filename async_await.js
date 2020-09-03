//Artical from :- https://javascript.info/async-await

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}
f();



/*async function f() {
    //return 1;
    return Promise.resolve(1);
}
f().then(data=>console.log(data)); */