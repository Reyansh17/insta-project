var istaus=document.querySelector("h1");
var btn=document.querySelector("#btn");
  flag=1;


btn.addEventListener("click",function(){
    if(flag==1){ 
   istaus.innerHTML="friend";
    istaus.style.color="light green";
    btn.innerHTML="Remove"
    flag=0;
}
else{
    istaus.innerHTML="stranger";
    istaus.style.color="black";
    btn.innerHTML="Add";
    flag=1;
}

})