function good(aa){
    var img = document.getElementById("img");
    var box = document.getElementById("aa");
    if (img) {
        img.src = "" + aa + ".jpg";
        img.style.width = "min(680px, 100%)";
    }
    if (box) {
        box.style.color = aa === "2" ? "#b91c1c" : "#1f2937";
    }
};
function   fly(){
   var a=document.getElementById("img")
    if (a) {
        a.style.width="min(500px, 100%)"
    }
}
     