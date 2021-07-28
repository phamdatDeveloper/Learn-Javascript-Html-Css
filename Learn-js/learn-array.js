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

var h1Tag = document.querySelectorAll('h1')[0];
console.log(h1Tag.nextElementSibling);

var data = {
    name: 'Pham Dat',
    password: '0123',
}

//===========Hoc Promise==============//
var promise = new Promise(
    //Excutor
    function (reslove, reject) {
        //logic
        //Thanh cong: reslove()
        //That bai: reject()
        reslove([{  //tai day se goi den ham then va in ra course
            name: 'dat',
        }]);
    }
);

promise
    .then(function (course) {
        console.log(course);
    })
    .catch(function () {
        console.log('fail');
    })
    .finally(function () {
        console.log('Done');
    });

function sleep(ms){
    return new Promise((reslove) =>{
        setTimeout(reslove,ms);
    });
};

sleep(1000)
    .then(function(){
        console.log(1);
    });


var stringArr = ['dat','duy','hai','huy'];
stringArr.forEach(function(arr,index){
    console.log(arr +' index: '+index);
});

for (const index in stringArr) {
    console.log(stringArr[index] +' index: '+index);
}