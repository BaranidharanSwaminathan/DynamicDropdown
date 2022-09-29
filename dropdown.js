function togglefunction(){
   var toggle = document.getElementsByClassName("toggle-outer")[0];
   if (toggle.style.display === "none"){
        toggle.style.display = "block";
    }
    else{
        toggle.style.display = "none";
    }
}
function togleclick(){
    var x = document.getElementsByClassName("toggle-content")[0];
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
