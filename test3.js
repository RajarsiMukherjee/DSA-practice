function printRLE(str) {
    var ans = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {

        let count = 1;
        while (i < n - 1 && str[i] == str[i + 1]) {
            count++;
            i++;
        }
        ans = ans + str[i];
        ans = ans + count;
    }
    console.log(ans)
}

let str = "aacccbb";

printRLE(str);