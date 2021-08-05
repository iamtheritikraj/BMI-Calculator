function bmicalculate(){

var height=document.getElementById("height-input").value;
var weight=document.getElementById("weight-input").value;
var heightunit=document.getElementById("unit-height").value;
var weightunit=document.getElementById("unit-weight").value;

alert("Enter Required Value");
if(heightunit=="in-inch")
height=height*0.0254;
if(weightunit=="in-pound")
weight=weight*0.453592;
var bmi=weight/(height*height);
if(bmi==NaN)
alert("Enter Value");
console.log(height);
console.log(weight);
console.log(bmi);
document.getElementById("short-result").innerHTML="Your BMI Index is "+bmi.toFixed(2)+ ".";
}