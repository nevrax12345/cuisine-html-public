function afficheMenu(obj){
var idMenu = obj.id;
var menu=document.getElementById(idMenu);
var container=document.getElementById('menu_container')
var cache=document.getElementById('grisage')
var body=document.getElementsByTagName('html')
if(menu_container.style.display == "none"){
container.style.display="flex";
menu.innerHTML= "<i class='fas fa-times' id='icone_menu'></i>";
cache.style.display="block";
console.log(body)

body[0].style.overflowY="hidden";

}

else{
container.style.display="none";
menu.innerHTML= "<i class='fas fa-bars' id='icone_menu'></i>";
cache.style.display="none"
body[0].style.overflowY="auto";

}

}
	   
