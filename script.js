var hobbies = ["music", "coding", "galas", "travel", "sports", "ableton"];
//console.log(hobbies.length);

//hobbies.push("Amsterdam");

//console.log(hobbies);

//hobbies.pop();

//console.log(hobbies);

hobbies.splice(2, 0, "read", "more coding");

//console.log(hobbies);

hobbies.shift();
hobbies.unshift();

//console.log(hobbies);

var goals = ["160k dollars yearly", "become a web-developer", "be happy"];
var allTheThings = hobbies.concat(goals);

//console.log(allTheThings);

var middle = allTheThings.indexOf("be happy");
//console.log(middle);

allTheThings.splice(9, 1);
//console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});

console.log(plans);
