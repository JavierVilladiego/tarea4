let calculPrimo = (num: number) => {//realiza el calculo para saber si es primo
    let primo = 0;

    for (let i: number = 1; i <= num; i++) {
        if (num % i == 0) {
            primo += 1;
        }
    }
    if (num == 1) {
        console.log(`El numero ${num} es invalido, ya que 1 no es primo. Por favor ingresar otro numero`)
    }
    if (primo > 2) {
        console.log(`El numero ${num} no es primo`);
    }
    else {
        console.log(`El numero ${num} es primo`);
    }

}
calculPrimo(97);

