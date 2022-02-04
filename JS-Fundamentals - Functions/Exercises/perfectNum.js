function loadingBar(num) {
    let bar = "";
  
    for (let i = 1; i < 100; i += 10) {
      if (i > num) {
        bar += ".";
      } else {
        bar += "%";
      }
    }
  
    if (num === 100) {
      console.log(num);
      console.log(`[${bar}]`);
    } else {
      console.log(`${num}% [${bar}]`);
      console.log("Still loading...");
    }
  }
  loadingBar(98)