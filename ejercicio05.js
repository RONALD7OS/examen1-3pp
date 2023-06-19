function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
       factorial*=i;


    }
   
    document.write("El factorial de " + num + " es : "+factorial);
}