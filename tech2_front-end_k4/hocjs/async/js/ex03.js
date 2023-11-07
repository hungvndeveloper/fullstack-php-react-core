var getUser = function(){

    var userPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('Error');
            resolve('Get user success')          
        }, 1000);
    });

    return userPromise;
   
} 

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

var showInfo = async function(){
    try{
        var users = await getUser();
        console.log(users);
    }catch(err){
        console.log(err);
    }finally{
        console.log('Xong');
    }
    //try => catch => finally

    // var posts = await getPosts();
    // console.log(posts);

    // var comments = await getComments();
    // console.log(comments);
}

 showInfo();

// var showMessage = async function(){
//     return 1;
// } //always return promise

// showMessage().then(function(data){
//     console.log(data);
// })