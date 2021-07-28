var users = [
    {
        id: 1,
        name: 'Pham Dat'
    },
    {
        id: 2,
        name: 'Le Duy'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Day la comment 1'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Day la comment 2'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Day la comment 3'
    },
    {
        id: 4,
        user_id: 2,
        content: 'Day la comment 4'
    }
];

// Lay comment 
// lay ra user id 
// tu use id lay ra use tuong ung


// viet fake api
function getComment() {
    return new Promise(function (reslove) {
        reslove(comments);
    })
}

function getUserById(userIds) {
    return new Promise(function (reslove) {
        var resule = users.filter(function (user) {
            return userIds.includes(user.id);
        })
        reslove(resule);
    })
}

getComment()
    .then(function (comments) {
        console.log(comments);
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        })
        return getUserById([1,2])
            .then(function (users) {
                return {
                    users: users,
                    comments: comments 
                };
            });
    })
    .then(function(data){
        console.log(data)
        var commentBlock = document.getElementById('comment-block');
        var html ='';
        data.comments.forEach(comment => {
            var  user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html+=`<li>${user.name} : ${comment.content}</li>`;
        });
        commentBlock.innerHTML=html;
    });
// getUserById([1,2])
//     .then(function(users){
//         console.log(users);
//     });