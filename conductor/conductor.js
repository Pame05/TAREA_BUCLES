// Una empresa está en búsqueda de un conductor y ha establecido dos requisitos fundamentales: 
// el candidato debe tener 25 años o más, además de poseer una licencia profesional. Tu tarea es 
// crear un programa que almacene estos dos datos en dos variables (una de tipo number y la otra boolean) 
// y validarlos usando una sentencia if. Si el candidato cumple con ambos requisitos, mostrará el mensaje 
// "Apto", y si no, mostrará "No apto".

let edad=Number(prompt("¿Cuántos años tienes?"));
let licencia = confirm ("¿Tienes licencia de conducir profesional?")

if(edad >=25 && licencia == true){
 alert("Apto")
}
else {
    alert("No apto")
}



// let edad=Number(prompt("¿Cuántos años tienes?"));
// let licencia = String(prompt("¿Tienes licencia de conducir profesional?"));

// if(edad >=25 && (licencia == "SI" || licencia == "Si" || licencia == "si" )){
//  alert("Apto")
// }
// else {
//     alert("No apto")
// }

