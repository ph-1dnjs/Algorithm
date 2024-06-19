function solution(n) {
    const result = [];
    let i = 1;
    while(result.length < n) {
      const hasThree = i.toString().split('').includes('3');
      if (i % 3 > 0 && !hasThree) {
          result.push(i); 
      } 
      i++;
   }
    return result[n-1];
}

// 1 2 4 5 7
// 8 10 11 14 16 
// 17 19 20 22 25