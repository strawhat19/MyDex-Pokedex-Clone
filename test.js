const rakib = require(`./rakib.json`);
var userData = rakib;
export const fs = require(`fs`);
fs.readFile(`./rakib.json`, `utf-8`, (error,data) => {
    if (error) {
        console.log(error);
    } else {
        var userData = data;
        module.exports = {userData};
    }
});
module.exports = {fs,userData};