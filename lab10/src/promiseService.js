function PromiseService(){
}

PromiseService.prototype.getData = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2);
        }, 2000)
    })
}

module.exports = PromiseService;