// JavaScript File
var html = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var header = document.getElementById("header");

html.addEventListener("click", function(){
    var newColor = input1.value;
    var newFont = input2.value;
    header.style.color = newColor;
    header.style.fontFamily = newFont;
});