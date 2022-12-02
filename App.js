const contenedor = document.getElementById("contenedor-tarjetas")
console.log(contenedor)

fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(data => {
        const dataApi = data.results
        console.log(dataApi)

      let acc = ""
      for (let i = 0; i < dataApi.length; i++) {
        acc = acc + `
          <div class="card">
           
            <img src=${dataApi[i].image} alt=${dataApi[i].name} class="card-img">
           
           <div class="status">
             <p> Nombre: ${dataApi[i].name} </p><br>
             <p> Especie:  ${dataApi[i].species} </p><br>
             <p> Estado:  ${dataApi[i].status}</p>
           </div>

          </div>

        `
        }
        contenedor.innerHTML = acc
    })