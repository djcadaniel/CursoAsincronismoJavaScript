//PROMESAS
const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('lo hicimos')
        }else{
            reject('whooooops')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err =>console.error(err))

/*OTRO EJEMPLO */
const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(()=>{
                resolve('true')
            }, 2000)
        }else{
            const error = new Error('wooop')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

/*Correr varias promesas- promesas encadenadas */

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array de resultados', response)
    })
    .catch(err =>{
        console.error(err)
    })