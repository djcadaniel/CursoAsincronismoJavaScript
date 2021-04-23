let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fecthData  = (url_api) =>{
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)//abro la conexion
        xhttp.onreadystatechange = (() =>{//validamos
            if(xhttp.readyState ===4){
                (xhttp.status === 200)//operacion ternaria, por eso no va if
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('erroooooor', url_api))
            }
        })
        xhttp.send()
    })
}

module.exports = fecthData