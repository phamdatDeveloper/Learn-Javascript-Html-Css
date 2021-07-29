var postApi = 'https://jsonplaceholder.typicode.com/posts';


//tra ve stream
fetch(postApi)
    .then(function(response){
        return response.json();
        //JSON.parse: JSON => js
    })
    .then(function (posts) {
        console.log(posts)
    })
    .catch(function (err) {
        alert('Lỗi');
      })