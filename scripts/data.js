let data=[]
let events=[]
let urlApi=("https://mindhub-xj03.onrender.com/api/amazing")
async function traerDatos(){
  try{
  const response = await fetch(urlApi)
  console.log(response)
  const data = await response.json()
  console.log(data);
    
      
console.log("hola");
let upcomingevents=[];
let pastevents=[];
console.log("eventos:");

console.log(data.events);

console.log("fecha de eventos: ");
for (clave of data.events){
    console.log(clave.date);
    if(clave.date>data.currentDate){
      upcomingevents.push(Object.entries(clave));
    
      
      }else{
        pastevents.push(Object.entries(clave));
      }
    
  } 
    
  
      console.log("eventos futuros: "+upcomingevents.join("///"));
        
          
    console.log("eventos pasados: "+pastevents.join("///"));
    
    let eventos=document.getElementById("eventos");
    let imagenes=[document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
    let titulos=[document.getElementById("title1"), document.getElementById("title2"), document.getElementById("title3"), document.getElementById("title4")];
    let desc=[document.getElementById("desc1"), document.getElementById("desc2"), document.getElementById("desc3"), document.getElementById("desc4")];
    let price=[document.getElementById("price1"), document.getElementById("price2"), document.getElementById("price3"), document.getElementById("price4")];
    let titles=[];
    let description=[];
    let prce=[];
    let img=[];
    
    for (clave of data.events){
      titles.push(clave.name);
      description.push(clave.description);
      prce.push(clave.price);
      img.push(clave.image);
      evento=clave;
    }
    
    /*for (i=0; i<4; i++){
      imagenes[i].setAttribute("src", img[i]);
      titulos[i].innerHTML=titles[i];
      desc[i].innerHTML=description[i];
      price[i].innerHTML=("Price: $"+prce[i]);   
      
    }*/
                                
                                  
                                  let categoriasi = [];
                                  for (clave of data.events){
                                  categorias=clave.category;
                                  
                                  if(!categoriasi.includes(clave.category)){
                                    categoriasi.push(clave.category);
                                  }
                                  
                                }
                                function imprimirCheckboxs(){
                                  for(i=0; i<7; i++){
                                    
                                    let categories =document.querySelector("#categories");
                                    let label = document.createElement("label");
                                    label.id=("categories"+i);
                                    let input =document.createElement("input");
                                    input.type = "checkbox";
                                    input.id=("cat"+i);
                                    label.innerHTML=categoriasi[i];
                                    label.appendChild(input);
                                    categories.appendChild(label);
  
  
                                  }
                                    let central =document.querySelector("#central");
                                    let search =document.createElement("input");
                                    search.type="text";
                                    search.id="search"
                                    let lupa =document.createElement("img");
                                    lupa.setAttribute("src", "./assets/lupa.png");
                                    lupa.id="lupa";
                                    search.appendChild(lupa);
                                    categories.appendChild(search);
                                    categories.appendChild(lupa);
                                    
                                }
                                imprimirCheckboxs();
                                console.log(categoriasi);
    let Eventos=[];
    Eventos=data.events;
    function imprimirCards(evento){
      
        i=evento._id-1;
        

        
      let div=document.createElement("div");
      
      let divisor=document.createElement("div");
      divisor.className=("card");
      eventos.appendChild(divisor);
      imagenes[i]=document.createElement("img");
      imagenes[i].setAttribute("src", evento.image);
      divisor.appendChild(imagenes[i]);
      titulos[i]=document.createElement("h2");
      titulos[i].innerHTML=evento.name;
      divisor.appendChild(titulos[i]);
      desc[i]=document.createElement("p");
      desc[i].innerHTML=evento.description;
      divisor.appendChild(desc[i]);
      price[i]=document.createElement("p");
      price[i].innerHTML=("Price: $"+evento.price);
      divisor.appendChild(price[i]);
      let nav=document.createElement("nav");
      divisor.appendChild(nav);
      nav.innerHTML= `<a href="./details.html?_id=${evento._id}">Ver Mas</a>`
        
    };
    
    
    Eventos.forEach(evento=>{
      imprimirCards(evento);
    });
      Eventos.forEach(evento=>{
      console.log(evento._id);
      });
      /*
      let selectedtitles=[];
      let selecteddescription=[];
      let selectedprce=[];
      let selectedimg=[];
      function catI(){
        for (clave in data.events){
        if(clave.category==c.target.textContent){
            selectedtitles.push(t.textContent);
            selecteddescription.push(d.textContent);
            selectedprce.push(d.textContent);
            selectedimg.push(im.textContent);
            for (i=0; i==titles.length; i++){
              imagenes[i].setAttribute("src", selectedimg[i]);
              titulos[i].innerHTML=selectedtitles[i];
              desc[i].innerHTML=selecteddescription[i];
              price[i].innerHTML=("Price: $"+selectedprce[i]);   
              
            }  
          }
        } 
      };*/
      
      
      
      let Events=[];
      Events=data.events
      function imprimirCard(evento){
        i=evento._id-1;
        let categoria= evento.categoria
        let Categoria=evento.category.split(" ").join("");
        
      let event=document.getElementById("evento");
      let divisor=document.createElement("div");
      divisor.className=(Categoria);
      event.appendChild(divisor);
      imagenes[i]=document.createElement("img");
      imagenes[i].setAttribute("src", evento.image);
      divisor.appendChild(imagenes[i]);
      titulos[i]=document.createElement("h2");
      titulos[i].innerHTML=evento.name;
      divisor.appendChild(titulos[i]);
      desc[i]=document.createElement("p");
      desc[i].innerHTML=evento.description;
      divisor.appendChild(desc[i]);
      price[i]=document.createElement("p");
      price[i].innerHTML=("Price: $"+evento.price);
      divisor.appendChild(price[i]);
      let nav=document.createElement("nav");
      
      nav.innerHTML= `<a href="./details.html?_id=${evento._id}">Ver Mas</a>`
      divisor.appendChild(nav);
        
      }
      function borrarCards(){
        
        
        let card = Array.prototype.slice.call(document.getElementsByClassName("card"), 0);
        for (cards of card){
        cards.remove();
        }    
      };
      
      function filtrar1(){
        
        let catI =document.getElementById("categories0").textContent;

            let categoria1=[];
            categoria1=Events.filter(evento=>evento.category.toUpperCase()==catI.toUpperCase());
            console.log(categoria1);
            let div=document.createElement("div");
            
            categoria1.forEach(evento=>{
              imprimirCard(evento);
              
                    });
                    borrarCards();
                             
                  };
          function filtrar2(){
            
            let catII =document.getElementById("categories1").textContent;
            
                let categoria2=[];
                categoria2=Events.filter(evento=>evento.category.toUpperCase()==catII.toUpperCase());
                console.log(categoria2);
                let div=document.createElement("div");
          categoria2.forEach(evento=>{
          imprimirCard(evento)

                });
                borrarCards()
              };      
              function filtrar3(){
                
                let catIII =document.getElementById("categories2").textContent;
                
                    let categoria3=[];
                    categoria3=Events.filter(evento=>evento.category.toUpperCase()==catIII.toUpperCase());
                    console.log(categoria3);
                    let div=document.createElement("div");
              categoria3.forEach(evento=>{
              imprimirCard(evento);
                    });
                  
                borrarCards()
                  };    
                  function filtrar4(){
                    
                    let catIV =document.getElementById("categories3").textContent;
                    
                        let categoria4=[];
                        categoria4=Events.filter(evento=>evento.category.toUpperCase()==catIV.toUpperCase());
                        console.log(categoria4);
                        let div=document.createElement("div");
                  categoria4.forEach(evento=>{
                  imprimirCard(evento)      
                });
                borrarCards()
                      };
                      function filtrar5(){
                        
                        let catV =document.getElementById("categories4").textContent;
                        
                            let categoria5=[];
                            categoria5=Events.filter(evento=>evento.category.toUpperCase()==catV.toUpperCase());
                            console.log(categoria5);
                            let div=document.createElement("div");
                      categoria5.forEach(evento=>{
                      imprimirCard(evento);
                          });
                          borrarCards()
                          };    
                          function filtrar6(){
                            
                            let catVI =document.getElementById("categories5").textContent;
                            
                                let categoria6=[];
                                categoria6=Events.filter(evento=>evento.category.toUpperCase()==catVI.toUpperCase());
                                console.log(categoria6);
                                let div=document.createElement("div");
                          categoria6.forEach(evento=>{
                          imprimirCard(evento)
                              });
                              borrarCards()
                              };    
                              function filtrar7(){
                                
                                let catVII =document.getElementById("categories6").textContent;
                                
                                    let categoria7=[];
                                    categoria7=Events.filter(evento=>evento.category.toUpperCase()==catVII.toUpperCase());
                                    console.log(categoria7);
                                    let div=document.createElement("div");
                              categoria7.forEach(evento=>{
                              imprimirCard(evento);
                                    });
                                    borrarCards()
                                  };  
                                  function filtrar8(){
                                
                                    let catVIII =document.getElementById("search");
                                    console.log(catVIII);
                                        let categoria8=[];
                                        categoria8=Events.filter(evento=>evento.name.toUpperCase().includes(catVIII.value.toUpperCase())||evento.description.toUpperCase().includes(catVIII.value.toUpperCase()||evento.category.toUpperCase().includes(catVIII.value.toUpperCase())));
                                        console.log(categoria8);
                                        let div=document.createElement("div");
                                  if(catVIII.value!=""){
                                        categoria8.forEach(evento=>{
                                  imprimirCard(evento);
                                        });
                                  }
                                        borrarCards()
                                      };  
                                      
                                      
                                  let cat1 =document.getElementById("cat0").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar1();
                                    } else {
                                      let comida = Array.prototype.slice.call(document.getElementsByClassName("Food"), 0);
                                      for (comidas of comida){
                                        comidas.remove();
                                      }
                                      
                                    }
                                  })
                                  let cat2 =document.getElementById("cat1").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar2();
                                    } else {
                                      let museo = Array.prototype.slice.call(document.getElementsByClassName("Museum"), 0);
                                      for (museos of museo){
                                        museos.remove();
                                      }
                                    }
                                  })
                                  let cat3 =document.getElementById("cat2").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar3();
                                    } else {
                                      let fiesta = Array.prototype.slice.call(document.getElementsByClassName("Concert"), 0);
                                      for (fiestas of fiesta){
                                        fiestas.remove();
                                      }
                                    }
                                  })
                                  let cat4 =document.getElementById("cat3").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar4();
                                    } else {
                                      let recital = Array.prototype.slice.call(document.getElementsByClassName("Race"), 0);
                                      for (recitales of recital){
                                        recitales.remove();
                                      }
                                    }
                                  })
                                  let cat5 =document.getElementById("cat4").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar5();
                                    } else {
                                      let carrera = Array.prototype.slice.call(document.getElementsByClassName("Books"), 0);
                                      for (carreras of carrera){
                                        carreras.remove();
                                      }
                                    }
                                  })
                                  let cat6 =document.getElementById("cat5").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar6();
                                    } else {
                                      let libro = Array.prototype.slice.call(document.getElementsByClassName("Cinema"), 0);
                                      for (libros of libro){
                                        libros.remove();
                                      }
                                    }
                                  })
                                  let cat7 =document.getElementById("cat6").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar7();
                                    } else {
                                      let cine = Array.prototype.slice.call(document.getElementsByClassName("Party"), 0);
                                      for (cines of cine){
                                        cines.remove();
                                      }
                                      
                                    }
                                  })
                                  let cat8 =document.getElementById("lupa").addEventListener('click', filtrar8);
                                  
                                }catch(e){
                                  console.log("error")
                                }
                              }
                              traerDatos();