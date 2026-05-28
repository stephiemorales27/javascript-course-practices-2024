/* 
  API Rest con jQuery
  */
  "use strict"
  $(document).ready(() => {
     /*1 Extraer de HTML*/
     
     var cards="";
     /* 2 Dar Evento al Botón*/
     $("#btnBuscar").on("click",()=>{
         console.log("Click");
         let categoria=$("#txtCategoria").val();
         if(categoria.length >2){
             const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=4q6OEmlR6hgD1YJ9Dw6wefU85KF7gNwz&q=${ categoria }&limit=4&lang=es`;
             /* 3.Consumir el API con $.ajax()*/
             $.ajax({
                 type: "GET",
                 url: URL_API,
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 success: respuesta =>{
                     //console.log(respuesta);
                     respuesta.data.forEach(element => {
                         cards += `
                                 <div class="col-3 mt-2">
                                     <div class="card shadow mb-5 bg-dark rounded">
                                         <img class="card-img-top" src="${ element.images.downsized_medium.url }" alt="${ element.title }"
                                         style="height: 180px !important;">
                                         <div class="card-body" style="height:120px !important;">
                                             <h5 class="card-title">${ element.title }</h5>
                                         </div>
                                     </div>
                                 </div>
                                 `;   
                     });
 
                     $("#tarjetas").html(cards);
                     $("#txtCategoria").value("");
                     $("txtCategoria").focus();
                 },
                 failure: fail=>console.error(">>> Fail: " + fail.status),
                 error: respuesta=>console.error(">>> Error: " + respuesta.status)
         })
     }
 })
     })