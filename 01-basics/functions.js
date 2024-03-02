function func(username){
    if(!username){
        return;
    }
    return `user ${username} just logged in`;
}
console.log(func())

//multiple parameters
function calculatePrice(...num1){
    return num1;
}
console.log(calculatePrice(200,300,400,500,600));

//with objects

function objectPrint(object){
    
}
