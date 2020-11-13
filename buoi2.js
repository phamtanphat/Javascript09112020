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

// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };

// function getkey(apartment){
//     for (const key in apartment) {
//         console.log(key)
//         if (typeof apartment[key] == 'object'){
//             getkey(apartment[key])
//         }
//     }
// }

// getkey(apartment)

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */

// 11 : Array method
// const arrNums = [1,2,3,4,5,6,7,8,9,10]

// Them phan tu o cuoi mang
// arrNums.push(11)
// Xoa phan tu o cuoi mang
// arrNums.pop()
// Them phan tu o dau mang
// arrNums.unshift(0)
// Xoa phan tu o dau mang
// arrNums.shift()
// Xoa o giua
// arrNums.splice(5,1)
//Them o giua
// const arrNums = [2, 3, 1, 8, 9, 7]

// const newArr = arrNums.concat(11,12,13)
// console.log(newArr)
// console.log(arrNums)

// function removeEnd(arr, n) {
//     arr.splice(arr.length - n, n)
//     return arr
// }

// console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));


// Viết hàm JavaScript để lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng

// function first(arr, n) {
//   arr.splice(n , arr.length - n)
//   return arr
// }

// console.log(first([1, 2, 3], 1)); // expect [1, 2]

//12 : Call la tham so
// Ví dụ
/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    return num * 2
}

function sumAndDo(nums, callback) {
    let result = 0
    for (const iterator of nums) {
        result += iterator
    }
    console.log(callback(result))
}

sumAndDo([1, 2, 3], double);


