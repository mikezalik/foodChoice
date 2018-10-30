//Simple switch statement to help with choice of lunch

//TODO: Utilize button to prompt script
//TODO: Styles?
//TODO: implement list to populate food genres??


//basic prompt 
var fArr = [];
var input = prompt("Whatchu want?");

function foodie () {
    fArr.push(input);
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