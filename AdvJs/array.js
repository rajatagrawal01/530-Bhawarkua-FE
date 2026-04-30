// var arr=[1,2,3,5,4,8,7,234,123,34534,121]

// console.log("Old array",arr);

// // arr.push(23)
// // arr.pop()
// // arr.shift()
// // arr.unshift(0)
// var length=arr.length

// console.log(arr.indexOf(34534));





// ============================================ForEach Function===============================

var arr=[1,2,3]

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]*2);
// }

// ======================For Each=============================

arr.forEach(value=>console.log("Ravi: ",value*2))


// ======================Map=============================

// let doubled = arr.map((value)=>{
//     return value*2;
// }) 
// doubled=[2,4,6]
// console.log("Map",doubled);


// ======================Filter=============================

var arr=[1,2,3,5,4,8,7,234,123,34534,121]

// let filteredArray = arr.filter((value)=>value%2==0);
// console.log(filteredArray);

// ======================Find=============================
// let result = arr.find((value)=>value>20);

// console.log(result);

// ======================Some=============================

// let example=arr.some((value)=>value>50000);
// console.log(example);

// ======================Every=============================

// let allEven=arr.every((value)=>value%2==0)
// let allEven=arr.every((value)=>value<30000)

// console.log(allEven);


// ======================Including=============================
// let fruits=["apple","banana","watermelon"];

// console.log(fruits.includes("Avocado"));

// ======================sort()=============================


// arr.sort()

// arr.sort((a,b)=>a-b) // Ascending
// arr.sort((a,b)=>b-a) // Descending

// console.log(arr);