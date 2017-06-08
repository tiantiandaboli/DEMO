/*********select**********/
var selbut = document.getElementById('ques');
var selin = document.getElementById('readin_in');
var selform = document.getElementById('readin');
selin.onfocus = function(){
	selin.style.background = "white";
	selin.value = null;
	selin.style.color = "black";
    selform.style.background = "white";
    width_add = setInterval('widthadd()',1);
    selbut.style.display = "none";
    //clearInterval(width_add);
}
selin.onblur = function(){
    selin.style.background = "#E1EAF2";
    selin.value = "搜索你感兴趣的内容";
    selin.style.color = "#A9A9A9";
    selform.style.background = "#E1EAF2";
    width_reduce = setInterval('widthreduce()',1);
    selbut.style.display = "block";
}

var count = 78;
var selform = document.getElementById('readin');
function widthadd(){
    if(count>5){
        count--;
        selform.style.marginRight = count + "px";
    }
    if(count == 5){
        clearInterval(width_add);
    }
}
function widthreduce(){
    if(count<78){
        count++;
        selform.style.marginRight = count + "px";
    }
    if(count == 78){
        clearInterval(width_reduce);
    }
}
/***********question**********************/
var ques_main = document.getElementById('ques');
var que_div = document.getElementById('que_ask');
var que_grey = document.getElementById('grey_screen');
ques_main.onclick = function(){
    que_div.style.display = "block";
    que_grey.style.display = "block";
}
var ques_close = document.getElementById('que_title').getElementsByTagName('i')[0];
var ques_cance = document.getElementById('que_submit').getElementsByTagName('a')[1];
    console.log(ques_close);
ques_close.onclick = function(){
    que_div.style.display = "none";
    que_grey.style.display = "none";      
}
ques_cance.onclick = function(){
	que_div.style.display = "none";
	que_grey.style.display = "none";
}
