var a=document.getElementById("hidden_content1")
var b=document.getElementById("hidden_content2")
var c=document.getElementById("hidden_content3")
var d=document.getElementById("container1")
var e=document.getElementById("container2")
var f=document.getElementById("container3")

function hideContent1(){
    var y= document.getElementById("radio1")          
        if(y.type==="radio" && y.checked){
            a.style.display="block";
            d.style.border="2px solid #FF6B82";
            d.style.backgroundColor="#FFF9FA";
            b.style.display="none";
            c.style.display="none";
            e.style.backgroundColor="#FFFFFF";
            f.style.backgroundColor="#FFFFFF";
            e.style.border="2px solid #C8C8C8";
            f.style.border="2px solid #C8C8C8";
        }
}

function hideContent2(){
    var y= document.getElementById("radio2")
    console.log(y)
        if(y.type==="radio" && y.checked){
            b.style.display="block";
            e.style.border="2px solid #FF6B82";
            e.style.backgroundColor="#FFF9FA";
            a.style.display="none";
            c.style.display="none";
            d.style.backgroundColor="#FFFFFF";
            f.style.backgroundColor="#FFFFFF";
            d.style.border="2px solid #C8C8C8";
            f.style.border="2px solid #C8C8C8";
        }
}

function hideContent3(){
    var y= document.getElementById("radio3")   
    if(y.type==="radio" && y.checked){
        c.style.display="block";
        f.style.border="2px solid #FF6B82";
        f.style.backgroundColor="#FFF9FA";
        a.style.display="none";
        b.style.display="none";
        d.style.backgroundColor="#FFFFFF";
        e.style.backgroundColor="#FFFFFF";
        d.style.border="2px solid #C8C8C8";
        e.style.border="2px solid #C8C8C8";
    }
}
// console.log(hideContent())