function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);

    let primos = 0;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j==0) {
                primos++;
            }if(i % j==1){
                primos--;
            }
        }


        
    }


    document.write("los numeros primos son : " + primos)

}