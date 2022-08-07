


function calcularValoresNomina(){
    let valorAnio = document.getElementById("opcionesAnios").value;
    let valoranio2022= 1000000;
    let valoranio2021= 908526;
    let valoranio2020= 877803;
    let valoranio2019= 828116;
    let diasHabiles = 30;
    let horasAlDia =8;
    let recargoDiurna = 0.25;
    let recargaNocturna = 0.75;
    let recargoFestivo = 0.75;

  function calcularValorDia(anio){
    return ((anio/diasHabiles)/horasAlDia);
  }

  function calcularExtraDiurno(dia,recargo){
    return dia + (dia*recargo);
  }

  function calcularDominical(dia,recargoD,recargoF){
    return dia + ((dia*recargoD)+(dia*recargoF));
  }


    if (valorAnio === "año2022"){
        document.getElementById("anioElegido").innerText= valoranio2022;
        let valorDia2022 = calcularValorDia(valoranio2022);
        let valorDiaExtra2022 = calcularExtraDiurno(valorDia2022,recargoDiurna);
        document.getElementById("horaExtraDiurna").innerText=  valorDiaExtra2022.toFixed(2);
        let valorNocturnoExtra2022 = calcularExtraDiurno(valorDia2022,recargaNocturna);
        document.getElementById("horaExtraNocturna").innerText = valorNocturnoExtra2022.toFixed(2);
        let valorDominical2022 = calcularDominical(valorDia2022,recargoDiurna,recargoFestivo);
        document.getElementById("extraDominical").innerText = valorDominical2022.toFixed(2);
        let valorDominicalNocturno2022 =calcularDominical(valorDia2022,recargaNocturna,recargoFestivo);
        document.getElementById("extraDominicalNocturna").innerText = valorDominicalNocturno2022.toFixed(2);
        let auxilioTransporte2022 = 117172;
        document.getElementById("auxilioTransporte").innerText = auxilioTransporte2022.toFixed(2);
    } else if (valorAnio === "año2021"){
        document.getElementById("anioElegido").innerText= valoranio2021;
        let valorDia2021 = calcularValorDia(valoranio2021);
        let valorDiaExtra2021 = calcularExtraDiurno(valorDia2021, recargoDiurna);
        document.getElementById("horaExtraDiurna").innerText=  valorDiaExtra2021.toFixed(2);
    } else if (valorAnio === "año2021"){ ;
    } else if (valorAnio === "año2020"){
        document.getElementById("anioElegido").innerText= valoranio2020;
        let valorDia2020 = ((valoranio2020/diasHabiles)/horasAlDia);
        let valorDiaExtra2020 = valorDia2020 + (valorDia2020*recargoDiurna);
        document.getElementById("horaExtraDiurna").innerText=  valorDiaExtra2020.toFixed(2);
    } else if (valorAnio === "año2021"){ ;
    } else if (valorAnio === "año2019"){
        document.getElementById("anioElegido").innerText= valoranio2019;
        let valorDia2019 = ((valoranio2019/diasHabiles)/horasAlDia);
        let valorDiaExtra2019 = valorDia2019 + (valorDia2019*recargoDiurna);
        document.getElementById("horaExtraDiurna").innerText=  valorDiaExtra2019.toFixed(2);
    } else if (valorAnio === "año2021"){;
    } else {
        console.log("está mal pero tu puedes");
    }
   
   
   
    
}

function calcularPrestacionesSociales()
{
let diasTrabajados = document.getElementById("diasTrabajados").value;
let salarioMensual = document.getElementById("salarioMensual").value;
let diasAnio = 360;
let intCes = 0.01;
let diasVac = 720;

let primaServicios = (salario,dias,diasAnio) => {
    return (salario * dias)/diasAnio;
}

let cesantias = (salario,dias,diasAnio) => {
    return (salario * dias)/diasAnio;
}

let vacaciones = (salario,dias,diasAnio) => {
    return (salario / diasAnio)*dias;
}

let vacacion = vacaciones(salarioMensual, diasTrabajados,diasVac);
document.getElementById("vacaciones").innerText= vacacion.toFixed(2);

let cesantia = cesantias(salarioMensual, diasTrabajados,diasAnio);
document.getElementById("cesantia").innerText= cesantia.toFixed(2);

let intCesantias = (cesantias, interes) => {
    return (cesantias*interes);
}

let interes = intCesantias(cesantia,intCes);
document.getElementById("intCesantia").innerText= interes.toFixed(2);


let prima = primaServicios(salarioMensual, diasTrabajados,diasAnio);
document.getElementById("prima").innerText= prima.toFixed(2);


}

function calcularSeguridadSocial(){

}

function calcularCupon(){
    let precio = document.getElementById("precio").value;
let cupon = document.getElementById("cupon").value;
    let cupones =["BATMAS","LAURA"];
    if(!cupones.includes(cupon)){
        alert("tienes un descuento")
    } else{
        alert("no tienes descuento")
    }
}
