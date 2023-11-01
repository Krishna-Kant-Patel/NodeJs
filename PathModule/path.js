const path = require("path");

console.log(path.dirname('E:/Lesson Files/NodeJs/PathModule/path.js'));
console.log(path.extname('E:/Lesson Files/NodeJs/PathModule/path.js'));
console.log(path.basename('E:/Lesson Files/NodeJs/PathModule/path.js'));

const myPath = path.parse('E:/Lesson Files/NodeJs/PathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);