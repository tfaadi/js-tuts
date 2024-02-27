const ob1={1:"a", 2:"b"}
const ob2={3:"a", 4:"b"}

// const ob3=Object.assign({}, ob1, ob2)
// const ob3={...ob1,...ob2}
// console.log(ob3);

const user={
    name:"aditya",
    id:123,
    isLogged:true
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("isLogged"))
