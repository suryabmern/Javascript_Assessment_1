// 1.Write a JavaScript function that merges two arrays and removes all duplicate elements.
// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let mergeArr = [...array1, ...array2];
let removeDuplicates = [...new Set(mergeArr)];
console.log(removeDuplicates);

// 2.Write a JavaScript function to generate an array between two integers of 1 step length.
// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));

function rangeBetween(rangeFrom, rangeTo) {
  var returnArray = [];
  for (let i = rangeFrom; i <= rangeTo; i++) {
    returnArray.push(i);
  }
  return returnArray;
}
console.log(rangeBetween(-4, 7));

// 3.Write a JavaScript program to check if an array is a factor chain or not.A factor chain is an array in
// which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -&gt; true
// ([2, 4, 16, 32, 64]) -&gt; true
// ([2, 4, 16, 32, 68]) -&gt; false

function isFactorChain(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i] % array[i - 1] !== 0) {
      return false;
    }
  }
return true;
}
var array4 = [2, 4, 8, 16, 32];
var array5 = [2, 4, 16, 32, 64];
var array6 = [2, 4, 16, 32, 68];

console.log("Original array:");
console.log("Check the said array is a factor chain or not?");
console.log(isFactorChain(array4));

console.log("Original array:");
console.log("Check the said array is a factor chain or not?");
console.log(isFactorChain(array5));

console.log("Original array:");
console.log("Check the said array is a factor chain or not?");
console.log(isFactorChain(array6));

// 4.Write a JavaScript program to find all the unique values in a set of numbers.
// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

function findUniqueValues(numbers) {
  var uniqueValues = {};

  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (!uniqueValues[num]) {
      uniqueValues[num] = 1;
    }
  }
  var result = Object.keys(uniqueValues).map(function (num) {
    return parseInt(num);
  });
return result;
}
var numbers1 = [1, 2, 2, 3, 4, 4, 5];
var numbers2 = [1, 2, 3, 4, 5];
var numbers3 = [1, -2, -2, 3, 4, -5, -6, -5];

console.log(findUniqueValues(numbers1));
console.log(findUniqueValues(numbers2));
console.log(findUniqueValues(numbers3));

// 5.Write a JavaScript program to sort the items of an array.
//  Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
//  var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// console.log(arr1.sort((a,b)=>a-b))

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1.sort((a, b) => a - b));

// 6. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: [&quot;d&quot;, &quot;do&quot;, &quot;dog&quot;, &quot;o&quot;, &quot;og&quot;, &quot;g&quot;]

function getSubsets(str) {
  var subsets = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      subsets.push(str.substring(i, j));
    }
  }
return subsets;
}
var input = "dog";
var output = getSubsets(input);
console.log(output);

// 7.Write a JavaScript program to get the length of a JavaScript object.
// Sample object :

var student = {
  name: "surya",
  sclass: "&quot;VI&quot",
  rollno: 12,
};
console.log(Object.entries(student)?.length);

// 8. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be
// sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

function bubbleSort(arr) {
  var len = arr.length;
  var swapped;

  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
var input = [6, 4, 0, 3, -2, 1];
var output = bubbleSort(input);
console.log(output);

//   9. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// &quot;14:37:42&quot;
// &quot;14:37:43&quot;
// &quot;14:37:44&quot;
// &quot;14:37:45&quot;
// &quot;14:37:46&quot;
// &quot;14:37:47&quot;

function displayTime() {
  var date = new Date();
  var hours = formatTimeComponent(date.getHours());
  var minutes = formatTimeComponent(date.getMinutes());
  var seconds = formatTimeComponent(date.getSeconds());

var currentTime = hours + ":" + minutes + ":" + seconds;
  console.log(currentTime);
}
function formatTimeComponent(component) {
  return component < 10 ? "0" + component : component;
}
setInterval(displayTime, 1000);

//10. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// [&quot;length&quot;, &quot;name&quot;, &quot;arguments&quot;, &quot;caller&quot;, &quot;prototype&quot;, &quot;isArray&quot;, &quot;observe&quot;, &quot;unobserve&quot;]

function allProperties(obj) {
  var properties = Object.getOwnPropertyNames(obj);
  var methods = properties.filter(function (property) {
    return typeof obj[property] === "function";
  });
  return methods;
}
console.log(allProperties(Array));
