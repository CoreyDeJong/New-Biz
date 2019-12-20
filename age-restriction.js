
function createGreeting() {
    var ready = prompt("Are you ready for Fun!");

    if(ready === "yes") {
        alert("Lets Code and Drink!");
    }   
}

var drink= function() {
    quantity = prompt("How many do you want?");


}

    
    quantity = Number(quantity);    


validation
while( isNaN(quantity) ){
    quantity = prompt("Please give us a number...");
    quantity = Number(quantity);
}

// list  and forloop
for (var i = 0; i <= 12; i++){
    console.log(i);

}



if (ready === "yes"){
    item = '<img src=""https://i.pinimg.com/originals/cb/1b/75/cb1b75ddbfde4e8cdde980d06b5db037.png">';
}else if (ready === "no"){
    item = '<img src=""https://i.pinimg.com/originals/cb/1b/75/cb1b75ddbfde4e8cdde980d06b5db037.png"">';
}else if (ready === "no") {
    alert("Do you like Coding?");
}else if (ready === "no") {
    alert("Come Back Another Day!");
}else{
    alert("Willing to try?");
    answer = 'Lets go!';
}





document.write(item);
