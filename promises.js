promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject();
    },3000);
});

promise
    .then(()=>{
        console.log('finally finsihed!');
    })
    .then(()=>{
        console.log('I was also run!!');
    })
    .catch(()=>{
        console.log('rejecteed uh!!');
    })