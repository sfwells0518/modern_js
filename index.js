var moment = require("moment"); // require
console.log(moment().format());

console.log("I am in JS");

console.log(moment().format("MMM Do YY"));
console.log(moment().format("dddd"));
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("[Today is] dddd"));

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var timeAgo = moment([2018, 0, 29]).fromNow();
console.log(timeAgo);

var timeAgo2 = moment([2009, 0, 29]).fromNow();
console.log(timeAgo2);

const { sqrt } = require('mathjs'); // require
console.log(sqrt(49).toString()); // 7

var numeral = require("numeral"); // require
var string = numeral(2040.271).format("$0,0.00"); // $2,040.27
console.log(string);

// Interpolate variable bindings
var name = "Sam Wells", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);