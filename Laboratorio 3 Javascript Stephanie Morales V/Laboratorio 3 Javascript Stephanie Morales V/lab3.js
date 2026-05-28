/* DOM CRUD*/
//Definición de Objetos

var vehiculos=[ 
 {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Negro",
    Estilo: "Sedan",
 },
 
{
    marca: "Ford" ,
    modelo: "Mustang",
    color: "Rojo",
    Estilo: "Coupe"

  },

 {
    marca: "Volkswagen",
    modelo:"Golf",
    color:"Gris",
    estilo:"Compacto",
 },
 {
    marca: "Mercedes-Benz", 
    modelo:"E-Class",
    color:"Dorado",
    estilo:"Sedán de lujo",
 }, 
 {
    marca: "Ferrari",
    modelo: "488 GTB",
    color: "Rojo",
    estilo: "Deportivo",
 }, 
 { 
    marca: "Audi",
    modelo: "A4",
    color: " Blanco",
    estilo: "Berlina",
 },
 {
    marca: "Chevrolet",
    modelo:"Silver",
    color:"Azul",
    estilo:"Caminoneta",
 },

 {
    marca: "Hyundai",
    modelo:"Tucson",
    color:"Plata",
    estilo:"Crossover",
 },
 {
    marca: "Tesla",
    modelo:"Modelo S",
    color:"Verde",
    estilo:"carro electrico de lujo",
 }, 
 {
    marca: "Haval",
    modelo:"New Haval Jolion",
    color:"Amarillo",
    estilo:"SUV",
 },
];

 /* Datos generales*/

 consttblVehiculos=document.querySelector("#tblVehiculos tbody");
 const btnGuardar= document.querySelector("#btnGuardar");

 cargarTabla();
 function cargarTabla(){
    let filas="";
    vehiculos.forEach((vehiculos) =>{
        filas +=`<tr>
        <td>${vehiculos.marca}</td>
        <td>${vehiculos.modelo}</td>
        <td>${vehiculos.color}</td>
        <td>${vehiculos.estilo} </td>
        </td>
        </tr>`;
 });
 tblVehiculos.innerHTML =filas
}
btnGuardar.addEventListener("click",()=>{
    const vehiculonuevo={
        marca: frm.txtMarca.value,
        modelo: frm.txtModelo.value,    
        color:frm.txtColor.value,
        estilo: frm.txtEstilo.value,
    } 
    vehiculos.push(vehiculonuevo);
    cargarTabla();
} );
