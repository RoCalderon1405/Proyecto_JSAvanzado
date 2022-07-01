// var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon-form/?limit=151',
    headers:{}
};

function consumo () {
    console.log('hola')
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        return JSON.stringify(response.data)
    })
    .catch(function (error){
        console.error(error);
    });
    
}

