var progressBar = document.querySelector('.progress-bar');

var progress = progressBar.querySelector('.progress');

var progressSpan = progress.querySelector('span');

var result = document.querySelector('.result');

var isMouseDown = false;
var initialClientX = 0;
var initial = 0;


progressBar.addEventListener('mousedown', function(e){
    var offsetX = e.offsetX;
    progress.style.width = `${offsetX}px`;
    isMouseDown = true; 
});

var getPercent = function(current, total){
    return Math.round(current / total * 100);
}



var handleDrag = function(e){
  
    if (isMouseDown){
        //console.log(initial);
        var offsetX = e.offsetX;
     
        progress.style.width = `${offsetX}px`;

        initialClientX = e.clientX;

        initial = offsetX;

        var dragEvent = new CustomEvent('drag', {
            detail: {
                value: getPercent(offsetX, progressBar.clientWidth)
            }
        });

        progressBar.dispatchEvent(dragEvent);
    }
}

progressBar.addEventListener('mousemove', handleDrag);

document.addEventListener('mousemove', function(e){
    e.stopPropagation();
    if (isMouseDown){
       
       var space =  e.clientX - initialClientX;
       //console.log(space);
       
       var width = space + initial;

       if (width >= progressBar.clientWidth){
        return;
       } 

       progress.style.width = `${width}px`;

       var dragEvent = new CustomEvent('drag', {
        detail: {
            value: getPercent(width, progressBar.clientWidth)
        }
       });

       progressBar.dispatchEvent(dragEvent);

    }
   
});

document.addEventListener('mouseup', function(){
    isMouseDown = false;
});

progressSpan.addEventListener('mousemove', function(e){
    e.stopPropagation();
    
})
/*
Bấm chuột xuống => Kéo (Không được nhả chuột) => Kết thúc kéo (Nhả chuột)
*/

// progressBar.addEventListener('drag', function(e){
//     result.innerText = `${e.detail.value}%`;
// })