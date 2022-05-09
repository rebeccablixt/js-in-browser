const hello = require('./hello');

// Require does not work in the browser. Need a bundler. Ex Watchify.

console.log('index');

hello();

// // queryselector
// const h1 = document.querySelector('#heading');
// // qs works with id, class, tag.
// h1.textContent = 'Morning';

// // querySelector kicks in on the first one. If more, choose querySelectorAll
// const delBtn = document.querySelectorAll('.delete-btn');

// // getElementByID/ClassName,TagName
// const h2 = document.getElementById('heading');
