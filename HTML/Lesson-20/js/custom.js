console.log("Hello World!");

// Getting the Element by DOM
var images = document.getElementsByTagName('img');

console.log(images);

var anchors = document.getElementsByTagName('a');

console.log(anchors);

var phrase = document.getElementsByTagName('p');

console.log(phrase);

var heading = document.getElementById('heading');

console.log(heading);

// Working with DOM Element
console.log(heading.innerHTML);

console.log(heading.nodeType);

// Changing content of DOM
var content = document.getElementById('main_content');

content.setAttribute('align', 'right');

heading.innerHTML = "Welcome to Our site."

// Creating new Element with JavaScript

var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = "Created Heading.";
new_phrase.innerHTML = "New Paragraph.";

content.appendChild(new_heading);
content.appendChild(new_phrase);

// Adding Events to DOM Element

var btn = document.getElementById('myBtn');
btn.onclick = function(){
    alert('Hello World!')
};

// Timers in JavaScript
function runMe(){
    console.log('Simple Message');
};

setTimeout(runMe, 2000)
// setInterval(runMe, 2000)