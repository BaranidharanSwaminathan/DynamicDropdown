var list = document.getElementsByClassName("dropdownList")[0];
var inputShow = document.getElementById("input-show");
var toggle = document.getElementsByClassName("toggle-outer")[0];
var x = document.getElementsByClassName("on")[0];
var y = document.getElementsByClassName("off")[0];
var imageshow = document.getElementsByClassName("image")[0];
var toggleShow=document.getElementById("toggle-outer");
var textareaShow=document.getElementById("textarea-outer");

function togglefunction(){
   if (toggle.style.display === "none"){
        toggle.style.display = "block";
    }
    else{
        toggle.style.display = "none";
    }
}

function toggleClick(){
   
    if (x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
    }
    else{
        x.style.display = "none";
        y.style.display="block";
    }
}

list.style.display = "none";
function dropdownClick(){
    // debugger
    if (list.style.display == "none"){
        list.style.display = "block";
    }
    else{
        list.style.display = "none";
    }
}

inputShow.style.display = "none"
function inputClick(){
    console.log("input is clicked");
    if (inputShow.style.display === "none"){
        inputShow.style.display = "block";
        imageshow.style.display = "none";
        toggleShow.style.display = "none";
        textareaShow.style.display = "none";
    }
    else{
        inputShow.style.display = "none";
    }
}

imageshow.style.display = "none";
function imageClick(){
    if (imageshow.style.display === "none" || inputShow.style.display === "block"){
        imageshow.style.display = "block";
        inputShow.style.display = "none";
        textareaShow.style.display = "none";
        toggleShow.style.display = "none";
    }
    else{
        imageshow.style.display = "none";
    }
}

toggleShow.style.display = "none";
function toggleclick(){
    if (imageshow.style.display === "none" || inputShow.style.display === "block" || toggleShow.style.display === "none"){
        toggleShow.style.display = "block";
        imageshow.style.display = "none";
        inputShow.style.display = "none";
        textareaShow.style.display = "none";
    }
    else{
        imageshow.style.display = "none";
        inputShow.style.display === "none";
        toggleShow.style.display === "none"
    }
}

textareaShow.style.display = "none";
function textareaClick(){
    if (imageshow.style.display === "block" || inputShow.style.display === "block" || toggleShow.style.display === "block" || textareaShow.style.display === "none"){
        toggleShow.style.display = "none";
        imageshow.style.display = "none";
        inputShow.style.display = "none";
        textareaShow.style.display = "block";
    }
    else{
        imageshow.style.display = "none";
        inputShow.style.display = "none";
        toggleShow.style.display = "none";
        textareaShow.style.display = "none";
    }
}