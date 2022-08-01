// var arr = [1,2,3];
// arr.enqueue(4);
// console.log(arr)
// function toCamelCase(str) {
//     let newStr = "";
//     if (str) {
//         let wordArr = str.split(/[" "]/g);
//         for (let i in wordArr) {
//             if (i > 0) {
//                 newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
//             } else {
//                 newStr += wordArr[i]
//             }
//         }
//     } else {
//         return newStr
//     }
//     return newStr;
// }
// const sent = "BOB loVes coding"
// console.log(toCamelCase(sent))
const toCamelCase = string => {
    const [head, ...tail] = string.split(/[" "]/g)
      .map(([head, ...tail]) => 
        [
          head.toUpperCase(),
          tail.join('').toLowerCase()
        ].join(''))
      .join('')
    return [head.toLowerCase(), ...tail].join('')
  }
  
  console.log(toCamelCase('BOB loVes coding'))