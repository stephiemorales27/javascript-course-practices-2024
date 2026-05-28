"use strict"
/* 2. CREAR VARIABLE DE BASE DATOS */
const db = firebase.firestore();

/* 3. CONFIGURAR APLICACION */
const COLECCION = "vehiculos";
var idSeleccion = "";
const tblVehiculos = document.querySelector("#tblVehiculos tbody");
const frm = document.querySelector("#frm");

/* 4. CARGAR LAS FUNCIONES DE FIREBASE */
const findAll = () => db.collection(COLECCION).get();

const findById = paramId => db.collection(COLECCION).doc(paramId).get();

const onFindAll = callback => db.collection(COLECCION).onSnapshot(callback);

const onInsert = objeto => db.collection(COLECCION).doc().set(objeto);

const onUpdate = (paramId, newObjeto) => db.collection(COLECCION).doc(paramId).update(newObjeto);

const onDelete = paramId => db.collection(COLECCION).doc(paramId).delete();
/* 5. CREAR METODOS DE CRUD */

/* SELECIONAR Vehiculos */
window.addEventListener("load",async ()=>{
    
     await onFindAll( data => {
        
        tblVehiculos.innerHTML = "";
        
        data.forEach( documento => {
            let vehiculoTO = documento.data();
            
            tblVehiculos.innerHTML += `
                                        <tr>
                                            <td>${ vehiculoTO.marca }</td>
                                            <td>${ vehiculoTO.modelo }</td>
                                            <td>${ vehiculoTO.color}</td>
                                            <td>${ vehiculoTO.estilo}</td>
                                            <td>
                                                <button class='btn btn-info btn-editar' data-id='${documento.id}'>Editar</button>
                                                <button class='btn btn-outline-danger btn-borrar' data-id='${documento.id}'>Borrar</button>
                                            </td>
                                        </tr>            
                                     `;
            
        });
        
        const btnEditar = document.querySelectorAll('.btn-editar');
        btnEditar.forEach( btn => {
            btn.addEventListener('click', async (evento)=>{
                idSeleccion = evento.target.dataset.id;

                const docSeleccionado = await findById(idSeleccion);
                const VehiculoTO = docSeleccionado.data();

                frm.txtMarca.value = VehiculoTO.marca;
                frm.txtModelo.value = VehiculoTO.modelo;
                frm.txtColor.value = VehiculoTO.color;
                frm.txtEstilo.value = VehiculoTO.estilo;
                frm.btnGuardar.innerHTML = "Modificar";
            });
        });


        const btnBorrar = document.querySelectorAll('.btn-borrar');
        btnBorrar.forEach( btn => {
            btn.addEventListener("click", (evento)=>{
                Swal.fire({
                    title: "Desea borra el registro?",
                    text: "",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si",
                    cancelButtonText: "No"
                  }).then(async(result) => {
                    if (result.isConfirmed) {
                        await onDelete(evento.target.dataset.id);
                        Swal.fire({
                        title: "Delete!",
                        text: "Registro eliminado!",
                        icon: "success"
                      });
                    }
                  });
            });    
        });
    
    });

});

/* GUARDAR */
frm.addEventListener("submit", async (evento)=>{
    evento.preventDefault();

    let VehiculoTO = {
        marca: frm.txtMarca.value,
        modelo:frm.txtModelo.value,
        color:frm.txtColor.value,
        estilo:frm.txtEstilo.value
    }

    if (idSeleccion.length > 0){
        await onUpdate(idSeleccion, VehiculoTO);
        Swal.fire("Registro actualizado!", "", "success");
    }else{
        await onInsert(VehiculoTO);
        Swal.fire("Registro amacenado!", "", "success");
    }
    
    limpiar();
    console.log(VehiculoTO);
});

/* LIMPIAR */
const limpiar = ()=>{
    frm.reset();
    frm.btnGuardar.innerHTML = "Guardar";
    idSeleccion = "";
}