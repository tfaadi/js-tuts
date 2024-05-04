//for 
// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

// break and continue


//break keyworks entertains no further iterations, it just break out of the conditional statement and the control flow is now at global scope
for(let i=0;i<10;i++){
    if(i==5){
        console.log("5 detected")
        break
    }
    console.log(i);
}

//continue statement just skips the particular iteration
for(let i=0;i<10;i++){
    if(i==5){
        console.log("5 detected")
        continue
    }
    console.log(i);
}