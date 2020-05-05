const check = (str) => {
    return new Set(str.toLowerCase().replace(/[^a-z]/g, "") ).size === 26;
} 

console.log(check("The quick brown fox jumps over the lazy dog."));
console.log(check('abcdefghijklmnopqrstuvwxyz'));
console.log(check('abcdefhijklmnopqrstuvwxyz')); //missing g