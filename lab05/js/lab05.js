function extraerTexto() {
    //Apellidos y nombres
    let nomap = document.getElementById("nomap").value;
    if (nomap != "") {
        let arreglo = nomap.split(' ');
        let apepa = arreglo[0];
        if (arreglo.length <= 1) {
            document.getElementById("appa").innerHTML = `${apepa}`
            let longitudap = apepa.length;
            document.getElementById("longap").innerHTML = `${longitudap}`
        } else {
            if (arreglo.length <= 2) {
                let nom1 = arreglo[1];
                let longitudap = apepa.length;

                document.getElementById("appa").innerHTML = `${apepa}`
                document.getElementById("nom").innerHTML = `${nom1}`
                document.getElementById("longap").innerHTML = `${longitudap}`
            }
            else {
                let apema = arreglo[1];
                let nom1 = "";
                let nom2 = "";
                if (arreglo.length > 3) {
                    nom1 = arreglo[2]
                    nom2 = arreglo[3]
                    document.getElementById("nom").innerHTML = `${nom1} ${nom2}`
                } else {
                    nom1 = arreglo[2]
                    document.getElementById("nom").innerHTML = `${nom1}`
                }

                let logappa = apepa.length;
                let logapma = apema.length;
                let longitudap = logapma + logappa;

                document.getElementById("appa").innerHTML = `${apepa}`
                document.getElementById("apma").innerHTML = `${apema}`
                document.getElementById("longap").innerHTML = `${longitudap}`
            }
        }
    }

    //Fecha de nacimiento:
    let fechanac = document.getElementById("fechanac").value;
    let mes = fechanac.substring(3, 5);
    let dia = fechanac.substring(0, 2);
    let anio = fechanac.substring(6, 10);

    let fechatemp = new Date(mes + "/" + dia + "/" + anio);
    let fechaactual = new Date();
    let edadactual = fechaactual.getFullYear() - fechatemp.getFullYear();

    document.getElementById("edad").innerHTML = `${edadactual}`

    let mesletra = "";

    switch (mes) {
        case "01":
            mesletra = "Enero";
            break;
        case "02":
            mesletra = "Febrero";
            break;
        case "03":
            mesletra = "Marzo";
            break;
        case "04":
            mesletra = "Abril";
            break;
        case "05":
            mesletra = "Mayo";
            break;
        case "06":
            mesletra = "Junio";
            break;
        case "07":
            mesletra = "Julio";
            break;
        case "08":
            mesletra = "Agosto";
            break;
        case "09":
            mesletra = "Setiembre";
            break;
        case "10":
            mesletra = "Octubre";
            break;
        case "11":
            mesletra = "Noviembre";
            break;
        case "12":
            mesletra = "Diciembre";
            break;

    }

    document.getElementById("mes").innerHTML = `${mesletra}`;
}

let contador = 0;

function cambiarcolor() {
    let a1 = document.getElementById("pb1")
    let a2 = document.getElementById("pb2")
    let a3 = document.getElementById("pb3")
    let a4 = document.getElementById("pb4")
    let a5 = document.getElementById("pb5")

    let co = document.getElementById("colorear")
    let r1 = document.getElementById("pr1")
    let r2 = document.getElementById("pr2")
    let r3 = document.getElementById("pr3")

    if(contador == 0){
        a1.classList.remove('azul')
        a1.classList.add('rojo')
        a2.classList.remove('azul')
        a2.classList.add('rojo')
        a3.classList.remove('azul')
        a3.classList.add('rojo')
        a4.classList.remove('azul')
        a4.classList.add('rojo')
        a5.classList.remove('azul')
        a5.classList.add('rojo')

        r1.classList.remove('rojo')
        r1.classList.add('azul')
        r2.classList.remove('rojo')
        r2.classList.add('azul')
        r3.classList.remove('rojo')
        r3.classList.add('azul')
        co.classList.remove('rojo')
        co.classList.add('azul')

        contador=1
    }else{
        a1.classList.remove('rojo')
        a1.classList.add('azul')
        a2.classList.remove('rojo')
        a2.classList.add('azul')
        a3.classList.remove('rojo')
        a3.classList.add('azul')
        a4.classList.remove('rojo')
        a4.classList.add('azul')
        a5.classList.remove('rojo')
        a5.classList.add('azul')

        r1.classList.remove('azul')
        r1.classList.add('rojo')
        r2.classList.remove('azul')
        r2.classList.add('rojo')
        r3.classList.remove('azul')
        r3.classList.add('rojo')
        co.classList.remove('azul')
        co.classList.add('rojo')

        contador=0;
    }
}

