function Timer(callback){
    setTimeout(function(){
        callback();
    }, 3000);
}

module.exports = Timer;