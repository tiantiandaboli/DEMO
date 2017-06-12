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
ques_close.onclick = function(){
    que_div.style.display = "none";
    que_grey.style.display = "none";      
}
ques_cance.onclick = function(){
	que_div.style.display = "none";
	que_grey.style.display = "none";
}
/******************topic**************************/
var topic_div = document.getElementById('topic');
var topic_page = document.getElementById('topic_page');
var topic_list = document.getElementById('topic').getElementsByTagName('li');
topic_page.onclick = function(){
    topic_div.style.display = "block";
}
for(i=0;i<topic_list.length;i++){
    topic_list[i].onmouseover = function(){
        this.style.backgroundColor = "#C2C2C2";
    }
    topic_list[i].onmouseout = function(){
        this.style.backgroundColor = "white";
    }
}
/*******************person menu*****************************/
var person = document.getElementById('me_page');
var person_menu = document.getElementsByClassName('person_menu')[0];
var person_quit = document.getElementsByClassName('person_menu')[0].getElementsByTagName('li')[6];
console.log(person_quit);
person.onclick = function(){
    if (person_menu.style.display == "block") {
        person_menu.style.display = "none";
    }
    else{
        person_menu.style.display = "block";
    }
}
person_quit.onclick = function(){
    person_menu.style.display = "none";
}
/*********************message menu**********************************************/
var message_list = document.getElementsByClassName('message')[0];
var message = document.getElementById('message_page');
var message_page1 = document.getElementsByClassName('message_list')[0];
var message_page2 = document.getElementsByClassName('message_people')[0];
var message_page3 = document.getElementsByClassName('message_fav')[0];
var message_button = document.getElementsByClassName('message_title')[0].children;
console.log(message_list.children);
message.onclick = function(){
    if (message_list.style.display == "block") {
        message_list.style.display = "none";
    }
    else{
        message_list.style.display = "block";
    }
}
for(var i= 0; i<3;i++){
    message_button[i].index = i;
    message_button[i].onclick = function(){
        for(var j=1;j<4;j++){
            message_list.children[j].style.display = "none";
        }
        console.log(this.index);
        message_list.children[this.index+1].style.display = "block";
    }
}

