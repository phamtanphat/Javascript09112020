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

// const arrNames = ["Teo","Ti","Hoa","Phat","Lan","Khanh"]

// const newArrNames = arrNames.filter(function(value){
//     return value.length == 3 ? true : false
// })
// console.log(newArrNames)

// Array.prototype.myFilter = function(cb){
//     const newArr = []
//     for (var i = 0 ; i < this.length ; i++){
//         const dk = cb(this[i] , i )
//         if (dk) {
//             newArr.push(this[i])
//         }
//     }
//     return newArr
// }

// const newArrNames = arrNames.myFilter(function(value){
//     return value.length == 3 ? true : false
// })
// console.log(newArrNames)

// 17 : Ham reduce
// const arrNums = [1,2,3,4,5,6,7,8,9,10]

// const newArrNums = arrNums.reduce(function(accumulator , currentValue){
//     return accumulator + currentValue
// },0)

// console.log(newArrNums)


// Trả về số lượng người đã vote
function totalVotes(arr) {
    const countVotes =  arr.reduce(function(accumulator , currentValue){
        if (currentValue.voted){
            accumulator++
        }
        return accumulator
    }, 0)
    console.log(countVotes)
}

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters) // 7
