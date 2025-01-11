//Binary Search in JS

function binarySearch(array, item) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2); 
  
      
      if (array[mid] === item) {
        return mid; 
      }
      
      else if (array[mid] < item) {
        left = mid + 1;
      }
      
      else {
        right = mid - 1;
      }
    }
  
    return -1; 
  }
  
  
  let array = [1, 3, 5, 7, 9, 11];
  let Search = 9;
  
  let result = binarySearch(array, Search);
  console.log(result);
  
//   if (result != -1) {
//     console.log(`Item found at index:-`,result);
//   } else {
//     console.log("Item not found");
//   }
  