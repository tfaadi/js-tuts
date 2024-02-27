const mysym=Symbol("key")
let myobj={
    name:"adityaj",
    "full name":"aditya",
    sem:6,
    [mysym]:"keyvalue",
    address:"mohali"
}

//over-writing
myobj.name="arsh"
// console.log(myobj.name);


//freezing an object


// Object.freeze(myobj);
// myobj.name="happy";
// console.log(myobj.name);

// console.log(myobj[mysym])
myobj.greeting=function(){
    console.log("Hello world")
}
myobj.greeting2=function(){
    console.log(`hello, ${this.name}`);  //this refers to the current obj
}
myobj.greeting();
myobj.greeting2();