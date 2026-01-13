export function analyseObject(arr){
    let average = arr.reduce((acc,currentVal)=>{
         return acc += currentVal
    })/arr.length

    return {
        average : average
    }
}

console.log(analyseObject([1,8,3,4,2,6]))