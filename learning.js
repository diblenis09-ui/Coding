let cl = console.log;
  //  cl(count);
for (let i = 1; i <= 100; i++) {
    if (i / 3 === 0 % i % 5 === 0) {
        cl("fizzbuzz");
    }
    if (i / 3 === 0) {
        cl("fizz");
    }
    else if (i % 5 === 0) {
        cl("buzz");
    }
    else {
        cl(i);
    }
}