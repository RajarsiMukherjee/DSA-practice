function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  console.log(newArr);
}
var colors = [6, 2, 5, 2, 2, 6, 6];
var colorsUnique=toUniqueArray(colors);
//output = [ 6, 2, 5 ]