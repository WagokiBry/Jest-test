export function analyseObject(arr){
    let average = arr.reduce((acc,currentVal)=>{
         return acc += currentVal
    })/arr.length;

    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);

    return {
        average : average,
        min: minVal,
        max: maxVal,
        length: arr.length
    }
}

console.log(analyseObject([1,8,3,4,2,6]))