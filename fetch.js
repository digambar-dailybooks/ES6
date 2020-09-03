const fetch = require('node-fetch');

/*fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));*/

/*fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));*/

/*fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));*/

/*const body = { a: 1 };
fetch('https://httpbin.org/post', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));*/

const { URLSearchParams } = require('url');
const params = new URLSearchParams();
params.append('a', 1);
    
fetch('https://httpbin.org/post', { method: 'POST', body: params })
    .then(res => res.json())
    .then(json => console.log(json));