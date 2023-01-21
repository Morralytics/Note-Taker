// Exports a function that generates a random number
module.exports = () => {
    Math.floor((1 + Math.random() * 1000)).toString(16).substring(1);
};