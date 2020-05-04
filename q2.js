var string = 'abcdefghijklmnopqrtuvwxyz';

var check = new Set(string.toLowerCase().replace(/[^a-z]/g, "") ).size === 26;

console.log(check);