var arrs = [1,2,3,[4,5],6,[7,8,9]];


var result = arrs.reduce(function(arr,currentArr){
    return arr.concat(currentArr);
},[]);

console.log(result);

//empty element of array
var course = [
    'java',
    'php',
    'c++',
    'C#'
];

//duyet mang voi for in
for (const key in course) {
   console.log(course[key]);
}


course.length = 10;
console.log(course);
