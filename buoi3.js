// 15 : Ham map
// const arrNumbers = [2,4,6,8,10,12]

// for (const key in arrNumbers) {
//     arrNumbers[key] *= 2   
// }
// console.log(arrNumbers)

// const newArrNumbers = arrNumbers.map(function(value, index){
//     return value * 2
// })

// console.log(newArrNumbers)

// Array.prototype.myMap = function(cb){
//     const newArr = []
//     for (var i = 0 ; i < this.length ; i++){
//         newArr.push(cb(this[i] , i ))
//     }
//     return newArr
// }

// const newArrNumbers = arrNumbers.myMap(function(value, index){
//     return value * 2
// })
// console.log(newArrNumbers)

// Ví dụ
// Make an array of strings of the names
// function namesOnly(arr) {
//     const newArrNames =  arr.map(function(person){
//         return person.name
//     })
//     console.log(newArrNames)
// }

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


//16  : Ham filter

const arrNames = ["Teo","Ti","Hoa","Phat","Lan","Khanh"]

const newArrNames = arrNames.filter(function(value){
    return value.length == 3 ? true : false
})
console.log(newArrNames)