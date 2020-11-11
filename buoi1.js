// ctrl + ~
// github : https://github.com/phamtanphat
// npm install nodemon -g
// 1 : Khai bao bien
// mutable vs immutable
// var a = 5
// const b = "10"
// console.log(b)

// 2 Kiểu dữ liệu
// Các trường hợp undefined
// TH1 : Khai báo bằng từ khóa var nhưng không gán giá trị
// var a 
// console.log(a)
// TH2 : Truy vấn tới thuộc tính không tồn tại trong object
// const teo = {
//     name :  "Nguyen Van teo",
//     age : 10
// }
// console.log(teo["names"])
// TH3 : function không có return hoặc chỉ return
// function doSth(action){
//     console.log(action)
//     return
// }

// 3 : Object
// const teo = {
//     name :  "Nguyen Van teo",
//     age : 10
// }
// console.log(teo["names"])

// 4 : Array
// const arrNames = ["Teo","Ti","Tun","Tuan"]
// console.log(arrNames[0])

// 5 : Toán tử
// var a = 5
// var b = 5

// var ketQua = a++ - --b - ++b + a-- - --a + b--
// 5 - --b - ++b + a-- - --a + b--     a = 6 , b = 5
// 5 - 4 - ++b + a-- - --a + b--     a = 6 , b = 4
// 5 - 4 - 5 + a-- - --a + b--     a = 6 , b = 5
// 5 - 4 - 5 + 6 - --a + b--     a = 5 , b = 5
// 5 - 4 - 5 + 6 - 4 + 5     a = 4 , b = 4
// 3
// console.log(ketQua)

// 6 : Function
// function doSth(action){
//     console.log(action)
//     return
// }
// console.log(doSth)

// 7 : Object method

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     showInfo : function () {
//         console.log(this.name , this.age)
//     }
// }
// teo.showInfo()

// 8 : Các phép so sánh 
// NaN : không phải là số
// var a = undefined
// var b = 0
// console.log(a + b)

// 9 : Vòng lặp

// 1 -> 100
// in số chẳn
// in số lẻ
// in số chia 3 dư 1
// in số chính phương ( Số lấy căn 2)

function inSoChan(){
    for (var index = 1; index <= 100; index++) {
       if (index % 2 == 0) {
           console.log(index)
       }
    }
}
function inSoLe(){
    for (var index = 1; index <= 100; index++) {
       if (index % 2 == 1) {
           console.log(index)
       }
    }
}

function inSoChia3Du1(){
    for (var index = 1; index <= 100; index++) {
       if (index % 3 == 1) {
           console.log(index)
       }
    }
}

function inSo(sodu , sochia){
    for (var index = 1; index <= 100; index++) {
        if (index % sochia == sodu) {
            console.log(index)
        }
     }
}

function inSoChinhPhuong(){
    for (var index = 1; index <= 100; index++) {
       if (Math.sqrt(index) % 1 == 0) {
           console.log(index)
       }
    }
}
