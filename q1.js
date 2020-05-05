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
