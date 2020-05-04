function indexEqualsValue(arry){ 
    return arry.findIndex(
        (val, index) => val === index
    );
}

console.log(indexEqualsValue([-8,0,2,5]));
console.log(indexEqualsValue([-1,0,3,6]));
console.log(indexEqualsValue([-8,2,3,4,5,5]));