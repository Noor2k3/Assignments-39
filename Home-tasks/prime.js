let num= 6;
let flag = false;
for(let index=2; index <  num; index++){
    if(num % index == 0){
        flag= true;
        break;
    }
}
if(!flag){
    console.log(num," is the prime number  ");
}
else
console.log(num," this is not prime number");
