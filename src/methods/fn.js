const create= ()=>{
    let elements = [0,1,2,3,4,5,6,7];
    
    let arrayOfEement = [...elements, ...elements]
    

    return random(arrayOfEement)
}

function random(arr){
     
    for(let i= arr.length-1; i > 1 ; i--){
        let j = Math.floor(Math.random()*(i+1))
        let auxiliarVariable = arr[i];
        arr[i]= arr[j]
        arr[j] = auxiliarVariable
    }

    return arr
}

export default {create}