var getUser = function(){

    var userPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
           // reject('Error');
            resolve('Get user success')          
        }, 1000);
    });

    return userPromise;
   
} //return promise (object)

var getPosts = function(){
    return new Promise(function(resolve){
        setTimeout(function(){
             resolve('Get posts success')          
         }, 1000);
    });
}

var getComments = function(){
    return new Promise(function(resolve){
        setTimeout(function(){
             resolve('Get comments success')          
         }, 1000);
    });
}

var showMessage = function(msg){
    console.log(msg);
}

// getUser().then(function(data){
//     console.log(data);
//     showMessage('Hiển thị dữ liệu thành công');
// }).catch(function(err){
//     console.log(err);
// })

/*
getUser()
getPosts()
*/

//promise hell
// getUser().then(function(users){
//     console.log(users);
//     getPosts().then(function(posts){
//         console.log(posts);

//     })
// })

//Promise Chaining
getUser().then(function(users){
    console.log(users);
    return getPosts();
}).then(function(posts){
    console.log(posts);
    return getComments();
}).then(function(comments){
    console.log(comments);
}).finally(function(){
    console.log('Xong hét rồi nhé');
})