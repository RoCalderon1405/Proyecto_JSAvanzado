var config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon-form/?limit=151',
    headers: {}
};

function consumo() {

    axios(config)
        .then(function (response) {
            var idPoke = JSON.stringify(response.data)
            let almacenar = '';
            for (let i = 0; i < 151; i++) {
                var json = JSON.stringify(response.data.results[i].name);
                var name = json.slice(1, -1)

                var statsPoke1 = consumoAbility( i+1 )
                // console.log(statsPoke1)

                // BOTON POKEMON
                    almacenar += '<div class="carta">' +
                    '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#abrirModal' + (i+1) + '"> ' +
                    '<img class="imgPokemon" src="assets/image/' + (i + 1) + '.png" >' +
                    '<div class="card-body">' +
                    '<h5 class="nombre-Pokemon">' + (name[0].toUpperCase() + name.substring(1)) + '</h5>' +
                    '</div>' +
                    '</button>' +
                    '</div>' +

                    // MODAL
                    '<div class="modal fade" id="abrirModal' +(i+1)+ '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> ' +
                    '<div class="modal-dialog" role="document">' +
                      '<div class="modal-content">' +
                        '<div class="modal-header">' +
                          // Nombre header Pokemon
                          '<h5 class="modal-title d-flex justify-content-center" id="exampleModalLabel">' + (name[0].toUpperCase() + name.substring(1)) + '</h5>' +
                          // Boton header close
                          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                          '</button>' +
                        '</div>' +
                        // Cuerpo modal (img, stats, #pokemon)
                        '<div class="modal-body row modalContendedor">' +
                          '<div class="col-5 modalContendedor"> <img class="imgPokemonModal d-flex justify-content-center" src="assets/image/' + (i + 1) + '.png" > </div>' +
                          '<div class="col-7 row modalContendedor">' +
                            '<div class="col-10 estadisticasPoke modalContendedor" id="statsPok">stats' +
                            '</div>' +
                            '<div class="col-2 numberPoke modalContendedor">#'+(i+1) +' '+
                            '</div>' +
                          '</div>' +
                        '</div>' +
                        // Descripción pokemon
                        '<div class="descripcionPoketittle">descripción</div>' +
                        '<div class="descripcionPoketittle">descripción</div>' +
                        '<div class="modal-footer">' +
                          '<button type="button" class="btn btn-secondary" data-dismiss="modal">Ábrase alv</button>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>';
            }
            const buscador = document.getElementById('cartas-block');

            buscador.innerHTML = almacenar;
        })


        .catch(function (error) {
            console.error(error);
        });

}

function consumoAbility(ID) {
  var statsPoke = ''

    axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/' + ID +'/',
        headers: {}
    })
    .then(function (response) {
          statsPoke = JSON.stringify(response.data.stats)
        })
         
    .catch(function (error) {
          console.error(error);
        });
        
        console.log(statsPoke)
        return statsPoke
}

