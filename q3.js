// 3. Infinite Summation - Write a function ‘sum’ that computes the sum of all the arguments passed to it.
// a. sum(1,2,3).toValue() === 6
// b. sum(1,2)(3).toValue() === 6
// c. sum(1)(2)(3).tovalue() === 6

function sum(){
    var total = 0,
        curry = function() {
            var args = [...arguments];

            args.forEach((n,i)=>{
                total += args[i];
            })    
            return args.length ? curry : total;
        };
    return curry.apply(0, [...arguments]);
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(1,2)(3)(4)(6)());
console.log(sum(1,2,3)(4)(7)());
console.log(sum(1,2,3,4)(8)());