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
