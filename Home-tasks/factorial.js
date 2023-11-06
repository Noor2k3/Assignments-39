
const numbers = 5;
if(numbers < 0){
    console.log("factorial of negative number does not exist");
}
else {
    let fact = 1;
    for (let i = 1; i <= numbers; i++) {
        fact *= i;
    }
    console.log("The factorial of ", numbers ,"is", fact);

}
   