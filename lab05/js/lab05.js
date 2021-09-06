 function extraerTexto(){
    let nomap = document.getElementById("nomap").value;
    let arreglo = nomap.split(' ');
    console.log(arreglo);
    let apepa = arreglo[0];
    console.log(apepa);

    document.getElementById("appa").innerHTML = ` ${apepa}`
 }
 
 