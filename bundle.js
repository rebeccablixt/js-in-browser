(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const hello = () => {
	console.log('good morning');
};

module.exports = hello;

},{}],2:[function(require,module,exports){
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

},{"./hello":1}]},{},[2]);
