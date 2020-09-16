"use strict";
let calculPerfecto = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    ;
    if (sum == num) {
        console.log(`El numero ${num} es Perfecto`);
    }
    else {
        console.log(`El numero ${num} no es Perfecto`);
    }
};
calculPerfecto(6);
//# sourceMappingURL=app.js.map