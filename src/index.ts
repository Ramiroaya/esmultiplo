let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");


rotulo1.innerHTML = "Ingrese el primer numero";
rotulo2.innerHTML = "Ingrese el segundo numero";
btnEnviar1.addEventListener("click", () => {
  let primerNumero = Number(dato1.value);

btnEnviar2.addEventListener("click", () => {
  let segundoNumero = Number(dato2.value);
  
  if(esMultiplo(primerNumero,segundoNumero)===true){
      console.log(primerNumero,"es multiplo de",segundoNumero);
      }else{ 
        console.log(primerNumero,"No es multiplo de",segundoNumero);
      }       
  function esMultiplo (numero1: number,numero2: number): boolean {
    let multiplo : boolean =(numero1%numero2==0);
    return multiplo;
  };
  };
});
});

