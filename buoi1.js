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

// 3 : Object
const teo = {
    name :  "Nguyen Van teo",
    age : 10
}
console.log(teo["names"])