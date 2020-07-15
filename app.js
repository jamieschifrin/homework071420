var arr = [0,1,2,3,4,5,6,7,8,9];

function myFunction(firstArgument,secondArgument) {
firstArgument.push(secondArgument);
return firstArgument
}

console.log(myFunction,'test');


// 6

function newfunction(firstArgument) {
    firstArgument.splice(2, 3);
    return firstArgument;
}

console.log(newfunction(arr));

// 7

function newNewFunction(firstArgument); {
   var sliceArr = firstArgument.slice(2,3);
    return sliceArr;
     
}

console.log(newNewFunction(arr))