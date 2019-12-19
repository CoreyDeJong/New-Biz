var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17) {
    greeting = 'Lets Drink!';
} else {
    greeting = 'Come Back Another Day!';
}
document.write('<h3>' + greeting + '</h3>');