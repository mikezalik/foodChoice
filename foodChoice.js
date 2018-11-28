//Simple program which prompts for lunch options and randomly selects from answers provided.

//TODO: Styles?

//basic prompt 
var fArr = [];
var input = prompt("What would you like for lunch?");
var input1 = prompt("What else would you like?");
var input2 = prompt("What else would you like to eat?");

//log before array
console.log(input, input1, input2);

    fArr.push(input);
    fArr.push(input1);
    fArr.push(input2);

//log after array
console.log(fArr[0], fArr[1], fArr[2]);

//randomly selects item from array for DOM input
function foodieCalc () {
    if (fArr.length = 3) {
        var result = fArr[(Math.floor(Math.random() * 3))];
        document.getElementById("result").innerHTML = result;
        } else if (fArr.length = 2) {
            var result = fArr[(Math.floor(Math.random() * 2))];
            document.getElementById("result").innerHTML = result;
        } else {
            var result = fArr[0];
            document.getElementById("result").innerHTML = result;   
        }
}

//calls foodieCalc function when loaded
document.addEventListener ("load", foodieCalc(fArr));

//original switch statement **NOT CALLED DURING DOCUMENT LOAD**
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