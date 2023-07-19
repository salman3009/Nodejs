//sync code
console.log("line 1");
function fetchHandler(){
   //async code
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('line 2')
            resolve(true)
        },3000)
    })
}
fetchHandler();
//sync code
console.log("line 3");