function calc(num1, num2, callback){
    return callback(num1, num2)
}
function sum(num1, num2){
    return num1 + num2
}

console.log(calc(7,2, sum))

/*Trabajar con tiempos */

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

console.log(date(printDate))