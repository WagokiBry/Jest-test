export function caesarCipher(str,shift){
    let result = "";
    for(let char of str){
        result += String.fromCharCode(char.charCodeAt(0)+shift)
    }
    return result;
}

console.log(caesarCipher("abc",1))