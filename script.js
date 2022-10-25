setInterval(function () {
    document.querySelector("#bulb").classList.toggle("bulb-2");
}, 300);
setInterval(function () {
    document.querySelector("#bulb2").classList.toggle("bulb-4");
}, 300);
const audio = new Audio("jethu.mp3");
function myfunction(audio) {
    
    audio.play();
    dummy();

}

function dummy(){
    document.getElementById("newa").classList.add("show");
    let user=document.getElementById("form").value.toUpperCase();
    document.getElementById("strong").innerHTML =user;
    $('.alert'+ user).alert();
}

function myfun(audio) {
    audio.pause();
}
function myfunc() {
    print();
}
