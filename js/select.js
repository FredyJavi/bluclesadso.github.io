

function calcular(){
    var select=document.getElementById("seleccion").value
    var cantidad=document.getElementById("cantidad").value

    const res = document.querySelector(".resultado");
    
    //console.log(typeof(select))
    //alert(select)
    var selecMenu=parseInt(select)
    var selecCantidad=parseInt(cantidad)
    if(selecMenu==1){
        var valorTotal=(selecCantidad*5000);
        //alert(valorTotal)
        // document.write("el valor a pagar es de :"+valorTotal)
        res.innerHTML = `<strong>Total:${valorTotal}</strong>`;
        document.body.appendChild(res);
    } else{
        return null
    }  
}