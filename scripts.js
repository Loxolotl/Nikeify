function DrawCanvas() {
    var a = document.getElementById("color").value;
    var c = document.getElementById('Canvas');
    var b = document.getElementById('size').valueAsNumber;
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo((157 + 25)*b, (109 + 35)*b);
    ctx.bezierCurveTo((131 + 25)*b, (140 + 35)*b, (119 + 25)*b, (155 + 35)*b, (105 + 25)*b, (192 + 35)*b);
    ctx.bezierCurveTo((89 + 25)*b, (233 + 35)*b, (119 + 25)*b, (256 + 35)*b, (131 + 25)*b, (260 + 35)*b);
    ctx.bezierCurveTo((144 + 25)*b, (264 + 35)*b, (171 + 25)*b, (266 + 35)*b, (199 + 25)*b, (254 + 35)*b);
    ctx.bezierCurveTo((287 + 25)*b, (217 + 35)*b,(313 + 25)*b, (205 + 35)*b, (336 + 25)*b, (195 + 35)*b);
    ctx.bezierCurveTo((376 + 25)*b, (177 + 35)*b, (573 + 25)*b, (92 + 35)*b, (559 + 25)*b, (98 + 35)*b);
    ctx.fillStyle = a;
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.beginPath();
    ctx.moveTo((157 + 25)*b, (110 + 32)*b);
    ctx.bezierCurveTo((139 + 25)*b, (152 + 35)*b, (150 + 25)*b, (169 + 35)*b, (156 + 25)*b, (179 + 35)*b);
    ctx.bezierCurveTo((166 + 25)*b, (194 + 35)*b, (194 + 25)*b, (195 + 35)*b, (209 + 25)*b, (192 + 35)*b);
    ctx.bezierCurveTo((240 + 25)*b, (185 + 35)*b, (317 + 25)*b, (164 + 35)*b, (332 + 25)*b, (160 + 35)*b);
    ctx.bezierCurveTo((364 + 25)*b, (152 + 35)*b, (573 + 25)*b, (92 + 35)*b, (559 + 25)*b, (96 + 35)*b);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.fill();
}
function wipe(){
    var c = document.getElementById('newCanvas');
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 600, 600);
}

function item1(){

}
function item2(){
    
}
function item3(){
    
}
function item4(){
    
}
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "30vh";
    document.getElementById("fader").style.opacity = "0.5";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("fader").style.opacity = "0";
  } 

document.addEventListener('click', function(event){

    if(event.target.closest('#nav-icon1')) {

    }
    else{
        closeNav();
    }
})