//1. Assume "#" is like a backspace in string. This means that string "a#bc#d" is actually "bd". 
//Your task is to process a string with "#" symbols.
//a. "abc#d##c" ==> "ac"
//b. "abc##d######" ==> ""
//c. "#######" ==> ""
//d. "" ==> ""

const backspace = (str) =>{
    var newString = [];
    str.split('').map(function(alpha, i){
        if(alpha !== '#'){
            newString.push(alpha);
        }
        else{
            str.length >0 ? newString.pop():newString;
        }
    })
    console.log(newString.join(""));
}

backspace('a#bc#d');
backspace("abc#d##c");
backspace("abc##d##efg#");
backspace("########");
backspace('');
