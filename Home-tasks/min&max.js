function min(arr){
    let min= arr[0];
    for(let index=1; index < arr.length; index++){
        if(arr[index] < min){

            min=arr[index];
        }
    }
    return min;
}
let array=[10,5,6,8,3,2,1];
const result= min(array);
console.log(result);


function max(arr){
    let max= arr[0];
    for(let index=1; index < arr.length; index++){
        if(arr[index] > max){

            max=arr[index];
        }
    }
    return max;
}
let array2=[10,5,6,8,3,2,11];
const result2= max(array2);
console.log(result2);
