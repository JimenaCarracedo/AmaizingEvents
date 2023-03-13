let data=[]
let events=[]
let urlApi=("https://mindhub-xj03.onrender.com/api/amazing")
fetch(urlApi)
.then(response=>response.json())
.then(data=>{
console.log(document);

const queryString = location.search;
const params =new URLSearchParams(queryString);
const id = params.get("_id");
let Eventos=[];
Eventos=data.events;
let categorias = [];
                                  
                                  let categoriasi = [];
                                  for (clave of data.events){
                                  categorias=clave.category;
                                  
                                  if(!categoriasi.includes(clave.category)){
                                    categoriasi.push(clave.category);
                                  }
                                  
                                }
                               
Eventos.forEach(evento => {
  console.log(evento._id);
  console.log(id);
  if(evento._id==parseInt(id)){
    
  const div =document.querySelector("#detalle")
  
  div.innerHTML = `<div class="card2">
  <img src="${evento.image}" alt="${evento.name}"></img>
  
  
  <h2 class="evento-title">${evento.name}</h2>
  <p class="description">${evento.description}</p>
  <p class="price">${evento.price}</p>
  <a href="./index.html">Go back</a>
  </div
  </div>
  </div>`
  }
})
  })
  