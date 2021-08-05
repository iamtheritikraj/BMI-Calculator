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
console.log(height);
console.log(weight);
console.log(bmi);
document.getElementById("short-result").innerHTML="Your BMI Index is "+bmi.toFixed(2)+ ".";
}
