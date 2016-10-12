// This is a simple code for search a name in the string
var text = "my name is Lazuliz and I do not wanna do this lesson, but I have to continue because seems like it is very important to this course.";
var myName = "Lazuliz";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "L") {
        for (var j = 0; j < (i + myName.length); j++) {
            hits.push("Lazuliz")
        }
    };

}
if (hits === 0) {
    console.log("Your name wasn't found!")
} else {
    console.log(hits)
}