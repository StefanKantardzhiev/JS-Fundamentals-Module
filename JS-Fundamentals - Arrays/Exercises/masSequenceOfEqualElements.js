function magicSum(array, mgnum) {
    for (let i = 0; i < array.length-1; i++) {
      let curEl = array[i];
      for (let j = i+1; j < mgnum; j++) {
          let nextEl = array[j];
          let sum = curEl + nextEl;
      if (sum === mgnum) {
              console.log(`${curEl} ${nextEl}`);
          }
          
        }
        
      }
      
  }
magicSum([1,7,6,2,19,23],8)