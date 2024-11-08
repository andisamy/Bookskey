    //selecting 
var layout=document.getElementById("overlay");
var poppupbox=document.getElementById("poppup-box");
var addbtn=document.getElementById("addclick");
addbtn.addEventListener("click",function (){
    layout.style.display="block";
    poppupbox.style.display="block";
})
//selecting cancel btn
var cancelpopup=document.getElementById("cancelbtn")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    layout.style.display="none";
    poppupbox.style.display="none";

})
//selecting container,inputatuthorname,inputtitle,shortnotes,input-addbtn,
var contain=document.querySelector(".bodycontainer")
var inputaddbtn=document.getElementById("input-addbtn")
var inputauthor=document.getElementById("input-authorname")
var inputtitle=document.getElementById("input-bookname")
var inputabout=document.getElementById("input-about")
var deletebtn=document.getElementById("deletebtn")

inputaddbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bodycontainer")
    div.innerHTML=`<h2>${inputtitle.value}</h2>
    <h4>${inputauthor.value}</h4>
    <h5>${inputabout.value}</h5>
    <button id="deletebtn" onclick="deletebook(event)">Delete</button>  `
    contain.parentElement.append(div)
    layout.style.display="none";
    poppupbox.style.display="none";
})
function deletebook(event){
    event.target.parentElement.remove()
}
