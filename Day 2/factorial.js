// factorial a number using recursion where function call itself


let n = 4;

function fac(n){
    if (n===0) {
        return 1;
        
    } else {
        return n  * fac(n - 1);
        
    }
}
console.log(fac(n));