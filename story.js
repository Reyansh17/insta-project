var arr=[
    {dp:"https://images.unsplash.com/photo-1687360440491-702812c5728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story:"https://images.unsplash.com/photo-1687360441042-a3eb360f3db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {
     dp:"https://images.unsplash.com/photo-1693074445771-6dd5d1b5668e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1523944339743-0fe06f079939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRwJTIwb2YlMjBtb2RlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
    },

    {
        dp:"https://images.unsplash.com/photo-1614629365070-f0820ad4336d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRwJTIwb2YlMjBtb2RlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1615304048636-47fa618f3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1528517011533-d33ada4e54ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRwJTIwb2YlMjBtb2RlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1535982368253-05d640fe0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },

    {
        dp:"https://plus.unsplash.com/premium_photo-1674498702971-62d36afa99e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        story:"https://images.unsplash.com/photo-1611034541517-727ee99b3f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"

    }
]

var clutter="";

arr.forEach(function(det,idx){
    clutter+=`  <div  class="story">
    <img  id="${idx}" src="${det.dp}" alt="">
</div>`

})
document.querySelector("#stories").innerHTML=clutter;

document.querySelector("#stories").addEventListener("click",function(det){
    console.log(arr[det.target.id].story);
    document.querySelector("#fullscreen").style.display="block";
    document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[det.target.id].story})`;
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none";
    },3000)

    
});


 
