// var h2 = document.querySelector('h2');
// console.log(h2);

var h3 = document.createElement('h3');
h3.innerText = 'Unicode Academ';
h3.classList.add('title');

var app = document.getElementById('app');
//app.appendChild(h3);
app.append(h3);

// var h3 = document.createElement('h3');
// h3.innerText = 'Unicode Academ';
// h3.classList.add('title');
// app.appendChild(h3);

var h2 = document.createElement('h2');
h2.innerText = 'Học Javascript';
app.append(h2);

var h1 = document.createElement('h1');
h1.innerText = 'Xin chào Front-End';

app.insertBefore(h1, h2);

var p = document.createElement('p');
p.innerText = 'Khóa học Front-End nền tảng';
app.replaceChild(p, h2);

app.removeChild(h3);