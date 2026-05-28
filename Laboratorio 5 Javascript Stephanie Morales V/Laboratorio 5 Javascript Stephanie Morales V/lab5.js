/*
    jQuery 3.x
    11/04/2023

    jQuery(Selector).evento(accion)
    $(Selector).evento(accion)
    -----------
    $(this) | $("p") | $(".clases") | $("#Id") | $("div p")
*/
"use strict"
$(document).ready(function(){
    console.log(" Hi from Australia, Argentina and Estonia desde jQuery");

    $("#btnOcultar").click(()=>{
        $("p").hide("slow");
    })
})
    $("#btnMostrar").click(()=>{
        $("p").show(5000, ()=>console.log("Mostro Parrafos"));
    }) 
    $("#btnSlideDown").click(()=>{
        $("#panel").slideDown(4000);
    })

    $("#btnSlideUp").click(()=>{
        $("#panel").slideUp(4000);
    })

    $("#btnSlideToggle").click(()=>{
        $("#panel").slideToggle("slow");
    }) 
    $("#btnAnimate").on("click", ()=>{
        let div = $("#div5");
 
        div.animate({left:'700px'}, "slow")
           .animate({width:'300px'}, "slow")
           .animate({fontSize:'50px'}, "slow")
    })

