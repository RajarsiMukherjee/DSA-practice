// function toUniqueArray(a){
//     var newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (newArr.indexOf(a[i]) === -1) {
//             newArr.push(a[i]);
//         }
//     }
//   console.log(newArr);
// }
// var colors = [6, 2, 5, 2, 2, 6, 6];
// var colorsUnique=toUniqueArray(colors);
//output = [ 6, 2, 5 ]

// var arr = [6,2,5,2,2,6,6];
// //o/p = 5

// var obj = {};
// for(var i = 0; i<arr.length; i++) {
//     if(obj[arr[i]] == undefined) {
//        obj[arr[i]]= 1; 
//     }else{
//         obj[arr[i]]++;
//     }
// }
// for(var x in obj) {
//     if(obj[x] == 1) {
//         console.log(x)
//     }
// }
function unique(arr1,arr2,uniqueArr) {
    for(var i=0; i<arr1.length; i++) {
        flag = 0;
        for(var j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                arr2.splice(j,1);
                j--;
                flag = 1;
            }
        }
  
        if(flag == 0) {
            uniqueArr.push(arr1[i]);
        }
    }
    uniqueArr.push(arr2);
    return uniqueArr;
}
  
var arr1 = [54, 71, 58, 95, 20];
  
var arr2 = [71, 51, 54, 33, 80];
  
var uniqueArr = [];
  
console.log("Unique elements in the two arrays are:");
console.log(unique(arr1,arr2,uniqueArr).flat());