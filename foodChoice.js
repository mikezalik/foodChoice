//Simple switch statement to help with choice of lunch

//TODO: Utilize button to prompt script
//TODO: Styles?
//TODO: implement list to populate food genres??


document.addEventListener ("load", foods());


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