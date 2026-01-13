export function analyseObject(arr){
    let average = arr.reduce((acc,currentVal)=>{
         return acc += currentVal
    })/arr.length;

    let minVal = Math.min(...arr)

    return {
        average : average,
        min: minVal
    }
}

console.log(analyseObject([1,8,3,4,2,6]))