// 4. Given a sorted array of distinct integers, write a function indexEqualsValue that returns
// the lowest index for which array[index] == index. Return -1 if there is no such index.
// Your algorithm should be very performant.
// a. [input] array of integers ( with 0-based non-negative indexing )
// b. [output] integer
// c. [-8,0,2,5] => 2 # since array[2] == 2
// d. [-1,0,3,6] => -1 # since no index in array satisfies array[index] == index

const indexEqualsValue = (arry) => { 
    return arry.findIndex(
        (val, index) => val === index
    );
}

console.log(indexEqualsValue([-8,0,2,5]));
console.log(indexEqualsValue([-1,0,3,6]));
console.log(indexEqualsValue([-8,2,3,4,5,5]));