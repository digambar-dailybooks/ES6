const fetch = require('node-fetch');

function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return res;
    } else {
        throw MyCustomError(res.statusText);
    }
}
 
function MyCustomError(err_txt){
    console.log("Error_message",err_txt);
    return err_txt;
}

fetch('https://httpbin.org/status/400')
    .then(checkStatus)
    .then(res => console.log('will not get here...'))