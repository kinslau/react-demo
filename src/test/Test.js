function f1() {
    var n = 5;
    if (true) {
      var n = 10;
    }
    console.log(n); // 5
  }
  f1()