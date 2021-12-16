import User from './assets/models/User.js';
const newUser = new User(`Rakib`,1,0,`rakib987@gmail.com`,`pass`,[],[]);
console.log(newUser);
fetch(`./rakib.json`).then(response => response.json()).then(data => console.log(data));