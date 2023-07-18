/* 

Fetch API
==============================

options = {
    method: '', // GET, POST, PUT, DELETE
    body: "", // POST, PUT
    headers: {
        'Content-Type': 'application/json', // (mime)º
    }
}
// pending, fullfilled, rejected

fetch(endpoint = "", options = {})
    .then((response) => { // respuesta del servidor 
        console.log(response.headers)
        return response.json()
    })
    .then((responseJson) => { // acceso a los datos de la peticion 
        responseJson[0]['name']
        responseJson[0].name
    })
    .catch((error) => {
        console.log(error)
    })

console.log('Hola');




*/