const arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function days(num){
    switch(num){
        case 1:
            return "mon";
        case 2:
            return "tues";
        case 3:
            return "wed";
        case 4:
            return "thu";
        case 5:
            return "fri";
        case 6:
            return "sat"
        case 7:
            return "sun"

    }

}
console.log(days(7))