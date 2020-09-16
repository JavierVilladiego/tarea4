let calculPerfecto = (num: number) => {

    let sum: number = 0;
    for (let i: number = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    };
    if (sum == num) {

        console.log(`El numero ${num} es Perfecto`);
    }
    else {
        console.log(`El numero ${num} no es Perfecto`);
    }

}
calculPerfecto(6);

