
let url = `https://pokeapi.co/api/v2/pokemon/?limit=151`
fetch(url)
  .then(response => response.json()
    .then(data => {
      // console.log(data)
      for (let name of data.results) {
        let datapoke = `${name.url}`
        fetch(datapoke)
          .then(response => response.json()
            .then(data => {
              let photo = data.sprites.front_default
              let name = data.name
              let newDiv = document.createElement("div");
              let newimg = document.createElement("img");
              let newnames = document.createElement("p");
              let newContent = document.createTextNode(name)
              console.log(name)
              newimg.src = photo
              newDiv.appendChild(newimg);
              newDiv.appendChild(newnames);
              newnames.appendChild(newContent)
        container.appendChild(newDiv);
     
            }))

      }

    }



    ))

