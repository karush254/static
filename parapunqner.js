// String.prototype.upper = function () {
//   return this.replace(/\b\w/g, function (match) {
//     return match.toUpperCase();
//   });
// };

// const text = "tyom karush";
// const capitalizedText = text.upper();
// console.log(capitalizedText);
//////// task 4
// let str = "khggvyuhjb hjbjhbhjb "
// String.prototype.Upper = function () {
//     let strArray = this.split(" ");

//     strArray = strArray.map((str)=> {
//         return str.charAt(0).toUpperCase() + str.substring(1);
//     })
//     return strArray.join(" ")
// }

// console.log(str.Upper());
// console.log("");
/////////////////3.1
// class ArramSum extends Array {
//   sum() {
//     return this.filter((val) => typeof val === "number").reduce(
//       (acc, val) => acc + val,
//       0
//     );
//   }
// }

// const arr = new ArramSum(1, 2, "three", 4, "five",5,6,147,"Hello","World","gggg");
// console.log(arr); 
// console.log(arr.sum());
