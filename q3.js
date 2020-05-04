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