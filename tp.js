/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  if(typeof(texto) === 'string'){


   let contador = 0;
    for (let i = 0; i < texto.length; i++){
      if(esVocal(texto[i])){
        contador++;
      }
    }
    return contador;
  }
  else{
    return -1
  }
}

//Creo una función para comprobar si es una vocal
function esVocal(a){
  let letra = a.toUpperCase();

  if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
    return true;
  }
  else {
    return false;
  }

}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  
  const urlRepo = "https://github.com/sebastiananea/Tp1-Fizzmod.git";
  return urlRepo;
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return
}



 module.exports = {
   contarVocales,
   urlRepo,
   crearClase
 };
