function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    let multiplos=0;
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {

            document.write(i+`<br>`);
            multiplos++;
          
        }
       
    }
    document.write("hay "+multiplos+" multiplos de tres y cinco")
}