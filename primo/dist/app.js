"use strict";
let calculPrimo = (num) => {
    let primo = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            primo += 1;
        }
    }
    if (num == 1) {
        console.log(`El numero ${num} es invalido, ya que 1 no es primo. Por favor ingresar otro numero`);
    }
    if (primo > 2) {
        console.log(`El numero ${num} no es primo`);
    }
    else {
        console.log(`El numero ${num} es primo`);
    }
};
calculPrimo(97);
//# sourceMappingURL=app.js.map