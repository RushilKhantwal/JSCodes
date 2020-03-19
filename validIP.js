function processData(input) {
  const lines = input.split('\n').slice(1);
  const ivp4 = /^(1?[0-9]?[0-9]\.|2[0-5][0-5]\.){3}(1?[0-9]?[0-9]|2[0-5][0-5]){1}$/;
  const ipv6 = /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/;
  lines.forEach(line => { 
    if (ivp4.test(line)) {
      console.log('IPv4');
    } else if (ipv6.test(line)) {
      console.log('IPv6');
    } else {
      console.log('Neither');
    }
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
