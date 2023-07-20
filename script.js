"use script";


// 1.Pattern Printing

const pattern = (num) => {
  let patternStr = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      patternStr += i + " ";
    }
    patternStr += "\n";
  }
  return patternStr;
};
console.log(`Problem 1 is \n\n${pattern(5)}`);

// 2. Frequency Count

const frequencyCount = function (arr) {
  let obj = {};
  let uniqueArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      arr.forEach((element) => {
        count = arr[i] === element ? (count += 1) : count;
      });
      uniqueArr.push(arr[i]);
      obj[arr[i]] = count;
      count = 0;
    }
  }
  return obj;
};
let obj2 = {
  1: 100,
};
console.log("Problem 2 is");
console.log(frequencyCount([1, 2, 1, 2, 2, 3, 4, 5, 1]));

//3. Remove Duplicates

const removeDuplicate = function (arr) {
  let uniqueArr = [];
  arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
};

console.log(
  `Problem 3 is \n\n Input -> ${[
    1, 2, 1, 2, 2, 6, 7, 6, 3, 4, 5, 1,
  ]}\n\n output -> ${removeDuplicate([1, 2, 1, 2, 2, 6, 7, 6, 3, 4, 5, 1])}`
);

// 4. Array Sum

const sumArray = function (arr) {
  return arr.reduce((accumulator, element) => {
    accumulator += element;
    return accumulator;
  }, 0);
};

console.log(
  `Problem 4 is \n\n Input -> ${[
    1, 2, 6, 7, 3, 4, 5,
  ]}\n\n output -> ${sumArray([1, 2, 6, 7, 3, 4, 5])}`
);

// 7.Largest Difference

let difference = 0;
const largestDifference = (arr)=>{
  difference = (arr.length > 2 ? (arr[0]-arr[1]) : 0);
  for(let i=2;i<arr.length-1;i++){
    difference = ((arr[i] - arr[i+1]) > difference) ? (arr[i]-arr[i+1]) : difference;
  }
  return difference;
}
console.log(`Problem 7 is --> \n\nInput is ${[400,54,100,21,500,200]} \n\nOutput ${largestDifference([400,54,100,21,500,200])}`)

// 8.Array Rotation

const arrayRotation = (arr,position)=>{
  let temp=0;
  let count=0;
  for(let i=0;i<arr.length-1;i++){
    if(count<position){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      if(i === arr.length-2){
        count++;
        i=-1;
      }
    }
  }
  return (arr);
}

console.log(`Problem 8 is --> \n\nInput is ${[400,54,100,21,500,200]} and no of positions is ${2} \n\nOutput ${arrayRotation([400,54,100,21,500,200],2)}`)

// 10.Array Intersection

const intersectionArray = function(arrOne, arrTwo){
  return [...arrOne,...arrTwo]
}

console.log(`Problem 10 is \n\n Input -> Array one ->${[1,2,3,4,5]} Array two -> ${[6,7,8,9,10]}\n\n output -> ${intersectionArray([1,2,3,4,5],[6,7,8,9,10])}`)