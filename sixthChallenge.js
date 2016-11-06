// This is a contact list with two functions

var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Murray",
    number: "(123) 4567 - 8910",
    address: ["Abbey Road", "Londres", "Inglaterra", "12345"]
};

friends.steve = {
    firstName: "Steve",
    lastName: "Carrel",
    number: "(111) 2131 - 4151",
    address: ["Hollywood Boulevard", "Los Angeles", "EUA", "67891"]
};

var list = function(obj) {
    for (var prop in obj) {
        console.log(prop);
    }
};

var search = function(name) {
    for (var prop in friends) {
        if (friends[prop].firstName === name) {
            console.log('First Name: ' + friends[prop].firstName);
            console.log('Last Name: ' + friends[prop].lastName);
            console.log('Number: ' + friends[prop].number);
            console.log('Address: ' + friends[prop].address);
            return friends[prop];
        }
    }

};