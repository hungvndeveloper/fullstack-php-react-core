/*
Javascript là ngôn ngữ lập trình bất đồng bộ

Tiến trình 1 => Tiến trình 2 => Tiến trình 3 (Đồng bộ)

- Callback
- Promise
- Async Await
*/

var getUser = function(callback, ...args){
    setTimeout(function(){
        console.log('Get user success');
        callback(...args); //showMessage()
    })
}

var showMessage = function(msg){
    console.log(msg);
}

getUser(showMessage, 'Hiển thị dữ liệu thành công');