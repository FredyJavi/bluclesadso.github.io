
console.log("select")

function sumar(n1,n2){
    const resultadosuma=n1+n2
    alert(resultadosuma)
}

function tablaMultiplicar(num1){
    var num2=(document.getElementById("cantidad2"))
    num2.style.display = 'none';
}

function calcular(){
   // alert("calculadora")
    const seleccion=parseInt(document.getElementById("seleccion").value)
    console.log(typeof(select))
    var num1=parseInt(document.getElementById("cantidad1").value)
    var num2=parseInt(document.getElementById("cantidad2").value)
    //console.log(typeof(num1))
    //swich
    switch (seleccion) {
        case 1:
          const resultadosuma=num1+num2;
          sumar(num1,num2)
          break;
        case 2:
            const resultadoResta=num1-num2;
            alert(resultadoResta)
            break;
        case 3:
            const resultaMultiplicacion=num1*num2;
            alert(resultaMultiplicacion)
            break;
        case 4:
                const resultaDivicion=num1/num2;
                alert(resultaDivicion)
            break;
        case 5:
                const resultaPotencia=num1*num1;
                alert(resultaPotencia);
            break; 
        case 6:
                tablaMultiplicar(num1);
            break;             
        default:
         break;
          
      }
}