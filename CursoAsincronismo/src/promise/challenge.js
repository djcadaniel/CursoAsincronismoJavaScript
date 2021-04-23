const fecthData = require('../utils/fecthData')
const API = 'htps://rickandmortyapi.com/api/character/'

fecthData(API)
    .then(data => {
        console.log(data.info.count);
        return fecthData(`${API}${data.results[0].id}`) //return de una nueva petición
    })
    .then(data =>{
        console.log(data.name)
        return fecthData(data.origin.url)
    })
    .then(data =>{
        console.log(data.dimension)
    })
    .catch(err =>console.log(err))