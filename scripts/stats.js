let data=[]
let events=[]
let urlApi=("https://mindhub-xj03.onrender.com/api/amazing")
async function traerDatos(){
  try{
  const response = await fetch(urlApi)
  console.log(response)
  const data = await response.json()
  console.log(data.events);
  let asistencia=[]
  let capacidad=[]
  let capacidadmaxima=[]
  let porcentajeasistencia=[]
  let categoriaspasadas=[]
  let eventospasados=[]
  let eventosfuturos=[]
  for(clave of data.events){ 
    capacidadmaxima.push(clave.capacity)
    
  if(clave.date<data.currentDate){
    asistencia.push(clave.assistance);
    capacidad.push(clave.capacity);
    categoriaspasadas.push(clave.category);
    eventospasados.push(clave);
      }else{
        eventosfuturos.push(clave);
      }
}
  for(i=0; i<asistencia.length; i++){
    porcentajeasistencia.push(asistencia[i]*100/capacidad[i])
    }
    
    let capmax=Math.max(...capacidadmaxima);  
    let porcentajemaximoasistencia=Math.max(...porcentajeasistencia)
    let porcentajeminimoasistencia=Math.min(...porcentajeasistencia);
     console.log("el porcentaje maximo de asistencia es de "+porcentajemaximoasistencia);
     console.log("la capacidad maxima es de "+capmax);  
     console.log("la asistencia menor es de "+porcentajeminimoasistencia);
     const div =document.querySelector("#maxasist")
  
     div.innerHTML = `<td class="pmaxas">${porcentajemaximoasistencia}%</td>
     <td class="pminas">${porcentajeminimoasistencia}%</td>
     <td class="capmax">${capmax}</td>
     `
  cpasadas= new Set(categoriaspasadas)
console.log(cpasadas);
  
  foodpasados=eventospasados.filter(evento=>evento.category=="Food")
  museumpasados=eventospasados.filter(evento=>evento.category=="Museum")
  concertpasados=eventospasados.filter(evento=>evento.category=="Concert")
  racepasados=eventospasados.filter(evento=>evento.category=="Race")
  bookspasados=eventospasados.filter(evento=>evento.category=="Books")
  cinemapasados=eventospasados.filter(evento=>evento.category=="Cinema")
  partypasados=eventospasados.filter(evento=>evento.category=="Party")
  
  foodfuturos=eventosfuturos.filter(evento=>evento.category=="Food")
  museumfuturos=eventosfuturos.filter(evento=>evento.category=="Museum")
  concertfuturos=eventosfuturos.filter(evento=>evento.category=="Concert")
  racefuturos=eventosfuturos.filter(evento=>evento.category=="Race")
  booksfuturos=eventosfuturos.filter(evento=>evento.category=="Books")
  cinemafuturos=eventosfuturos.filter(evento=>evento.category=="Cinema")
  partyfuturos=eventosfuturos.filter(evento=>evento.category=="Party")
  
  function iniciarvalores(){
    ganancias=0
    gananciastotales=0
    asistencia=0
    asistenciatotal=0
    cont=0
  };
  
  function calcular(cont){
    ganancias=+clave.price*clave.assistance
    gananciastotales=+ganancias+gananciastotales
    asistencia=(clave.assistance/clave.capacity)*100
    asistenciatotal=+(asistencia+asistenciatotal)
    porcentaje=asistenciatotal/cont
  };
  function calcular1(cont){
    
    ganancias=+clave.price*clave.capacity
    gananciastotales=ganancias+gananciastotales
    asistencia=(clave.capacity/clave.capacity)*100
    asistenciatotal=asistencia+asistenciatotal
    porcentaje=asistenciatotal/cont
  };
  function imprimirvalores(){
    console.log("la asistencia de la categoria es de "+porcentaje+"%");  
    console.log("la ganancia del evento es de "+ganancias);
    console.log("la ganancia de la categoria es de "+gananciastotales);
  };
  iniciarvalores();
  for(clave of foodpasados){
    cont++
    calcular(cont);
    console.log("valores de comidas");
    
  };
  imprimirvalores();
  const cat1 =document.querySelector("#datospasados")
  let T1=document.createElement("td")
  T1.innerHTML="Category"
  let T2=document.createElement("td")
  T2.innerHTML="Revenues"
  let T3=document.createElement("td")
  T3.innerHTML="Percentage of Attendance"
  let Tr1=document.createElement("td")
  Tr1.innerHTML="Food"
  let Td1=document.createElement("td")
  Td1.innerHTML=gananciastotales
  let Td2=document.createElement("td")
  Td2.innerHTML=asistencia+"%"
  T1.appendChild(Tr1)
  T2.appendChild(Td1)   
  T3.appendChild(Td2)
  cat1.appendChild(T1)
  cat1.appendChild(T2)
  cat1.appendChild(T3)
  iniciarvalores();
  for(clave of museumpasados){
    cont++
    calcular(cont);
    console.log("valores de museos");
    
  };
  imprimirvalores();
  let Tr3=document.createElement("td")
  Tr3.innerHTML="Museums"
  let Td4=document.createElement("td")
  Td4.innerHTML=gananciastotales
  let Td5=document.createElement("td")
  Td5.innerHTML=asistencia+"%"
  Tr1.appendChild(Tr3)
  Td1.appendChild(Td4)   
  Td2.appendChild(Td5)
  iniciarvalores();
  for(clave of concertpasados){
    cont++
    calcular(cont);
    console.log("valores de conciertos");
    
  };
  imprimirvalores();
  let Tr4=document.createElement("td")
  Tr4.innerHTML="Concerts"
  let Td6=document.createElement("td")
  Td6.innerHTML=gananciastotales
  let Td7=document.createElement("td")
  Td7.innerHTML=asistencia+"%"
  Tr3.appendChild(Tr4)
  Td4.appendChild(Td6)   
  Td5.appendChild(Td7)
  iniciarvalores();
  for(clave of racepasados){
    cont++
    calcular(cont);
    console.log("valores de carreras");
    
  };
  imprimirvalores();
  let Tr5=document.createElement("td")
  Tr5.innerHTML="Race"
  let Td8=document.createElement("td")
  Td8.innerHTML=gananciastotales
  let Td9=document.createElement("td")
  Td9.innerHTML=asistencia+"%"
  Tr4.appendChild(Tr5)
  Td6.appendChild(Td8)   
  Td7.appendChild(Td9)
  iniciarvalores();
  for(clave of bookspasados){
    cont++
    calcular(cont);
    console.log("valores de libros");
    
  };
  imprimirvalores();
  let Tr6=document.createElement("td")
  Tr6.innerHTML="Books"
  let Td10=document.createElement("td")
  Td10.innerHTML=gananciastotales
  let Td11=document.createElement("td")
  Td11.innerHTML=asistencia+"%"
  Tr5.appendChild(Tr6)
  Td8.appendChild(Td10)   
  Td9.appendChild(Td11)
  iniciarvalores();
  for(clave of cinemapasados){
    cont++
    calcular(cont);
    console.log("valores de cines");
    
  };
  imprimirvalores();
  let Tr7=document.createElement("td")
  Tr7.innerHTML="Cinema"
  let Td12=document.createElement("td")
  Td12.innerHTML=gananciastotales
  let Td13=document.createElement("td")
  Td13.innerHTML=asistencia+"%"
  Tr6.appendChild(Tr7)
  Td10.appendChild(Td12)   
  Td11.appendChild(Td13)
  iniciarvalores();
  for(clave of partypasados){
    cont++
    calcular(cont);
    console.log("valores de fiestas");
    
  };
  imprimirvalores();
  let Tr8=document.createElement("td")
  Tr8.innerHTML="Party"
  let Td14=document.createElement("td")
  Td14.innerHTML=gananciastotales
  let Td15=document.createElement("td")
  Td15.innerHTML=asistencia+"%"
  Tr7.appendChild(Tr8)
  Td12.appendChild(Td14)   
  Td13.appendChild(Td15)
  iniciarvalores();
  for(clave of foodfuturos){
    cont++
    calcular1(cont);
    console.log("valores de comidas");
    
    
  };
  imprimirvalores();
  const cat =document.querySelector("#datosfuturos")
  let t1=document.createElement("td")
  t1.innerHTML="Category"
  let t2=document.createElement("td")
  t2.innerHTML="Revenues"
  let t3=document.createElement("td")
  t3.innerHTML="Percentage of Attendance"
  let tr1=document.createElement("td")
  tr1.innerHTML="Food"
  let td1=document.createElement("td")
  td1.innerHTML=gananciastotales
  let td2=document.createElement("td")
  td2.innerHTML=asistencia+"%"
  t1.appendChild(tr1)
  t2.appendChild(td1)   
  t3.appendChild(td2)
  cat.appendChild(t1)
  cat.appendChild(t2)
  cat.appendChild(t3)
  iniciarvalores();
  for(clave of museumfuturos){
    cont++
    calcular1(cont);
    console.log("valores de museos");
    
  };
  imprimirvalores();
  let tr3=document.createElement("td")
  tr3.innerHTML="Museums"
  let td4=document.createElement("td")
  td4.innerHTML=gananciastotales
  let td5=document.createElement("td")
  td5.innerHTML=asistencia+"%"
  tr1.appendChild(tr3)
  td1.appendChild(td4)   
  td2.appendChild(td5)
  iniciarvalores();
  for(clave of concertfuturos){
    cont++
    calcular1(cont);
    console.log("valores de conciertos");
    
  };
  imprimirvalores();
  let tr4=document.createElement("td")
  tr4.innerHTML="Concerts"
  let td6=document.createElement("td")
  td6.innerHTML=gananciastotales
  let td7=document.createElement("td")
  td7.innerHTML=asistencia+"%"
  tr3.appendChild(tr4)
  td4.appendChild(td6)   
  td5.appendChild(td7) 
  
  iniciarvalores();
  for(clave of racefuturos){
    cont++
    calcular1(cont);
    console.log("valores de carreras");
    
  };
  imprimirvalores();
  let tr5=document.createElement("td")
  tr5.innerHTML="Race"
  let td8=document.createElement("td")
  td8.innerHTML=gananciastotales
  let td9=document.createElement("td")
  td9.innerHTML=asistencia+"%"
  tr4.appendChild(tr5)
  td6.appendChild(td8)   
  td7.appendChild(td9) 
  
  iniciarvalores();
  for(clave of booksfuturos){
    cont++
    calcular1(cont);
    console.log("valores de libros");
    
  };
  imprimirvalores();
  let tr6=document.createElement("td")
  tr6.innerHTML="Books"
  let td10=document.createElement("td")
  td10.innerHTML=gananciastotales
  let td11=document.createElement("td")
  td11.innerHTML=asistencia+"%"
  tr5.appendChild(tr6)
  td8.appendChild(td10)   
  td9.appendChild(td11) 
  
  iniciarvalores();
  for(clave of cinemafuturos){
    cont++
    calcular1(cont);
    console.log("valores de cines");
    
  };
  imprimirvalores();
  let tr7=document.createElement("td")
  tr7.innerHTML="Cinema"
  let td12=document.createElement("td")
  td12.innerHTML=gananciastotales
  let td13=document.createElement("td")
  td13.innerHTML=asistencia+"%"
  tr6.appendChild(tr7)
  td10.appendChild(td12)   
  td11.appendChild(td13) 
  
  iniciarvalores();
  for(clave of partyfuturos){
    cont++
    calcular1(cont);
    console.log("valores de fiestas");
    
  }; 
  imprimirvalores();
  let tr8=document.createElement("td")
  tr8.innerHTML="Party"
  let td14=document.createElement("td")
  td14.innerHTML=gananciastotales
  let td15=document.createElement("td")
  td15.innerHTML=asistencia+"%"
  tr7.appendChild(tr8)
  td12.appendChild(td14)   
  td13.appendChild(td15) 
  
}catch(e){
    console.log("error")
  }
}
traerDatos();