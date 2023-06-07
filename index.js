function longestArray(arr) {
    let longestArr = [];
    let currentArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] > arr[i - 1]) {
        currentArr.push(arr[i]);
      } else {
        if (currentArr.length > longestArr.length) {
          longestArr = currentArr;
        }
        currentArr = [arr[i]];
      }
    }
  
    if (currentArr.length > longestArr.length) {
      longestArr = currentArr;
    }
  
    return longestArr;
  }
  
  const input = [1, 2, 3, 2, 3, 1, 4, 5, 6, 12, 17];
  const longestArr = longestArray(input);
  console.log(longestArr);