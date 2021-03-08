function circuloFunction(){
    var selector = document.getElementById("figura");
    selector.className ='';
    var selector2 = document.getElementById("body");
    selector.classList.toggle("circulo");
    selector2.classList.toggle("bg-M_color");
    
}

function romboFunction(){
    var selector = document.getElementById("figura");
    selector.className ='';
    var selector2 = document.getElementById("body");
    selector.classList.toggle("rombo");
    selector2.classList.toggle("bg-M_color2");
}
function rectanguloFunction(){
    var selector = document.getElementById("figura");
    selector.className ='';
    var selector2 = document.getElementById("body");
    selector.classList.toggle("rectangulo");
    selector2.classList.toggle("bg-M_color3");
}

function topFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("top");
}
function bottomFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("bottom");
}


function rightFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("right");
}
function leftFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("left");
}
function pesFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("diagonal1");
}

function lalFunction(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("diagonal2");
}