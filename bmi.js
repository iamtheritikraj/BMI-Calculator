function bmicalculate(){

var height=document.getElementById("height-input").value;
var weight=document.getElementById("weight-input").value;
var heightunit=document.getElementById("unit-height").value;
var weightunit=document.getElementById("unit-weight").value;
if (height === "" || isNaN(height)) 
        alert("Provide a valid Height!");
    else if (weight === "" || isNaN(weight)) 
        alert("Provide a valid Weight!");
if(heightunit=="in-inch")
height=height*0.0254;
if(weightunit=="in-pound")
weight=weight*0.453592;
var bmi=weight/(height*height);
if(isNaN(bmi)==false)
{
let result = document.querySelector("#short-result");
if (bmi < 18.6)
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Under Weight)";
else if (bmi >= 18.5 && bmi < 25) 
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Normal)";
else
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Over Weight)";
}
}
