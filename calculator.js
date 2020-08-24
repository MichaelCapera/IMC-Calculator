var IMC = document.getElementById("IMC");
var resp = document.getElementById("resp");
var borrar = document.getElementById("borrar");
    borrar.addEventListener("click", clickBorrar);
var calcular = document.getElementById("calcular");
	calcular.addEventListener("click", clickCalcular );




 function clickCalcular(){
 	var m = document.getElementById("estatura").value;
 	var kg = document.getElementById("peso").value;
 	var imc = Math.round( kg / (m * m));
 	
 	IMC.innerHTML = imc;

 	if (imc>=18.5 && imc<=24.9){ resp.innerHTML = "normal";}

 		else if(imc>=25 && imc<=29.9){ resp.innerHTML = "más alto de lo normal";}
 		else if(imc>=30 ){ resp.innerHTML = "demasiado alto, tiene problemas de obesidad";}
 		else if(imc<18.5){ resp.innerHTML = "más bajo de lo normal";}
 		else{alert("Debes ingresar tus datos, revisa que sean números", IMC.innerHTML="", resp.innerHTML="");

 		}

 	
 }

 function clickBorrar(){

	
	IMC.innerHTML = '';
    resp.innerHTML = '';
    
    
}



