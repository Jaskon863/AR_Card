
//进入页面立即触发
window.onload=function(){
    tab=document.getElementsByClassName("tab");
    tab[0].style.display="block";
    
}

function choosebar(evt,id)
{
    var i,tab,but;
    tab=document.getElementsByClassName("tab");
    tab[id].style.display="block";
    tab[Math.abs(id-1)].style.display="none";
}



        
