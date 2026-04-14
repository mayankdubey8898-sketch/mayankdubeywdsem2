const myPromise=new Promise((resolve,reject)=>{
    let age =20;
    if(age>18){
        resolve("eleigible for vote")
    }
    else{
        reject("not eligible for vote")
    }
})

myPromise
.then 