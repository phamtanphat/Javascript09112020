// 15 : Ham map
const arrNumbers = [2,4,6,8,10,12]

// for (const key in arrNumbers) {
//     arrNumbers[key] *= 2   
// }
// console.log(arrNumbers)

const newArrNumbers = arrNumbers.map(function(value, index){
    return value * 2
})

console.log(newArrNumbers)