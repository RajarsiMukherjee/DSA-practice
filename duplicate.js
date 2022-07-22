let  array = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
//output = [ 2, 3 ]
    let n =  array.length;
    var ans = []
     
     
    // count the frequency
    for (let i = 0; i < n; i++) {
         array[ array[i] % n]
            =  array[ array[i] % n] + n;
    }
     
    for (let i = 0; i < n; i++) {
        if ( array[i] >= n * 2) {
            ans.push(i)
        }
    }
    console.log(ans);