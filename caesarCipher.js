export function caesarCipher(str,shift){
    let result = "";
    let base = "a".charCodeAt(0)
    for(let char of str){
        
        result += String.fromCharCode((char.charCodeAt(0)+shift))
    }
    return result;
}



console.log(caesarCipher("xyz", 3))