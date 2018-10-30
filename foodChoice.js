//Simple switch statement to help with choice of lunch

//TODO: Code IF ELSE statement using array length to determine math.
//TODO: Styles?
//TODO: Fix foodieCalc


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

function foodieCalc () {
    if (fArr.length = 3) {
        var result = fArr.slice(Math.floor(Math.random() * 3));
        document.getElementById("result").innerHTML = result;
        } else if (fArr.length = 2) {
            var result = fArr.slice(Math.floor(Math.random() * 2));
            document.getElementById("result").innerHTML = result;
        } else {
            var result = fArr;
            document.getElementById("result").innerHTML = result;   
        }
}

foodieCalc(fArr);

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