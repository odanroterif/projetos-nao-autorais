const frmpesquisa = document.querySelector("form");

const apikey = 'cf0d91c9';

frmpesquisa.onsubmit = (ev) => {

    ev.preventDefault();
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") 
    {
      alert("preencha o campo!");
      return
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`).then(result => result.json()).then(json => loadlist(json))
}

const loadlist = (json) => {

    const lista = document.querySelector("div.lista");
    lista.innerHTML ="";


    if (json.response == 'False') 
    {
        alert("nenhum filme encontrado");
        return
    }


    json.Search.forEach(element =>{

        console.log(element);

        let  item = document.createElement("div");

        item.classList.add("item");

        item.innerHTML =`<img src="${element.Poster}"/><h2>${element.Title}</h2>`;
        lista.appendChild(item);
        
    });
}