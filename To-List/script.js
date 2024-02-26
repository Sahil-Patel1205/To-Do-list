const inpBox=document.getElementById("inp-box")
const listContainer = document.querySelector(".list-container")

function addTask(){
    if(inpBox.value === ""){
        alert("You need to write something!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inpBox.value="";
 }

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheaked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
 })
