function isPrime(n){
    var num = parseInt(n);
    if (isNaN(num)) {
        throw "input is not a number";
    } else if (num < 2) {
        return false;

    } else {
        for( let i = 2; i < num; i++) {if (num % i === 0){
            return false;
        }
    }
    return false;
}
}