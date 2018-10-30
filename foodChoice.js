//Simple switch statement to help with choice of lunch

//TODO: Code IF ELSE statement using array length to determine math.
//TODO: Styles?


//basic prompt 
var fArr = [];
var input = prompt("What would you like for lunch?");
var input1 = prompt("What else would you like?");
var input2 = prompt("What else would you like to eat?");

function foodie () {
    fArr.push(input);
    fArr.push(input1);
    fArr.push(input2);
}

console.log(fArr);


//original switch statement
document.addEventListener ("load", foodie());
    function foods() {
        switch(Math.floor(Math.random() * 3)){
        case 0:
        text = "American";
        break;
        case 1:
        text = "Mexican";
        break;
        case 2:
        text = "Thai";
        break;
    }
document.getElementById("result").innerHTML = "Eat " + text + " food!";
                                                        alert(text);
    }