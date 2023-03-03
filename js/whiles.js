function mostrar(){
    const res = document.querySelector(".resultado");
    let cuposComprados=parseInt(document.getElementById("cantidad").value)
    alert("cupos iniciales vendidos "+cuposComprados);
    const cupoBus=30;

    while(cuposComprados<cupoBus){
        const cuposRestantes=cupoBus-cuposComprados
        const cupos=prompt("Cuantos tiket va a adquirir quedan : "+cuposRestantes)
        const cuposInt=parseInt(cupos)
        cuposComprados+=cuposInt;
        
        if(cuposComprados>=cupoBus){
            res.innerHTML = `<strong>Total de cupos vendidos:${cuposComprados}</strong>`;
        }
    }
    
}