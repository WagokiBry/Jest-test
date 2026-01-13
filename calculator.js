export  function createObject() {

    return{

        add(a,b){
return a + b
    },

    subtract(a,b){
        return a-b
    }
,
    multiply(a,b){
        return a*b
    },

    divide(a,b){
        return a/b
    }

    }
}

let calc = new createObject()
console.log(calc.divide(18,9))



    

    

