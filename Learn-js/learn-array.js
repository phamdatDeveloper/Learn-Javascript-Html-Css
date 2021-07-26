var arrs = [1, 2, 3, [4, 5], 6, [7, 8, 9]];

var result = arrs.reduce(function (arr, currentArr) {
    return arr.concat(currentArr);
}, []);

console.log(result);

//============================== HOC ARRAY ============================
//empty element of array
var courses = [
    'java',
    'php',
    'c++',
    'C#'
];

//duyet mang voi for in
for (const key in courses) {
    //    console.log(courses[key]);
}

/*-length cua mang se bang 10 nhung phan tu thuc chi la 4
-neu dung for binh thuong thi for se chay 10 lan thay vi 4*/
courses.length = 10;
// console.log(courses);

//foreach 
Array.prototype.forEach2 = function (callback) {
    for (const key in this) {
        console.log('key =' + key);
    }
}

courses.forEach2(function (course, index, arr) {
    console.log(course, index, arr);
});

//Xay dung ham Filter
var course1 = [
    {
        name: 'java',
        cost: 200
    },
    {
        name: 'c++',
        cost: 300
    },
    {
        name: 'c#',
        cost: 190
    }
];

var courseFilter = course1.filter(function (c) {
    return c.cost < 250;
});
console.log(courseFilter);

