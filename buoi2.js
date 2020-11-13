// 10 : For of vs for in
// const arrNums = [5,1,2,10,20,15]

// for (const iterator of teo) {
//     console.log(iterator)
// }

// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     let result = 1;
//     for (const iterator of arr) {
//         result *= iterator
//     }
//     return result
// }

// console.log(multiply([2, 3, 4])); // expect: 24

// const arrNums = [5,1,2,10,20,15]
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }

// for (const key in teo) {
//     console.log(key)
// }

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getkey(apartment){
    for (const key in apartment) {
        console.log(key)
        if (typeof apartment[key] == 'object'){
            getkey(apartment[key])
        }
    }
}

getkey(apartment)

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */


