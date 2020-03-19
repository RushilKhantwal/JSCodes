function processData(input) {
   let needles = [];

//Get the needles
//Split and reverse to find needles
let tmp = input.split('\n').reverse(); 
for (let i = 0; i < tmp.length; i++) {
    //Break if line is a number
    if (!isNaN(tmp[i])) {
        break;
    }
    needles.push(tmp[i]);
}

//Count occurances of needles
//Reverse again to serch for needles in correct order
needles.reverse().forEach(needle => {
    let thisRegExp = new RegExp('((?<=\\w)'+needle+'(?=\\w))', 'gm');
    //Log length if array is defined, else log 0
    console.log(input.match(thisRegExp)?input.match(thisRegExp).length:0);
});
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
