/*global console */
let allspans=document.querySelectorAll('.buttons span');
let results=document.querySelector(".results>span");
let theinput=document.getElementById("name");
allspans.forEach(span=>{
    span.addEventListener("click",(e)=>{
      if(e.target.classList.contains("check")){
        checkItem();
      } 
      if(e.target.classList.contains("add")){
        addItem();
      } 
      if(e.target.classList.contains("delete")){
        deleteItem();
      } 
      if(e.target.classList.contains("show")){
        showItem();
      } 

    })

});

function showMessage(){
    results.innerHTML = 'the input cant be empty';
}
function checkItem(){
    if(theinput.value !==''){
      if(localStorage.getItem(theinput.value)){
        results.innerHTML=`Found Local Item Called <span>${theinput.value}</span>`;
      } else{
        results.innerHTML=`No Local Storage Item With The Name <span>${theinput.value}</span>`;
      }
    } else{
      showMessage();
    }
}


function addItem(){
  if(theinput.value !==''){
    localStorage.setItem(theinput.value,"test");
    results.innerHTML=`Local Storage Item <span>${theinput.value}</span>added`;
    theinput.value='';
  } else{
    showMessage();
  }
}
function deleteItem(){
  if(theinput.value !==''){
    if(localStorage.getItem(theinput.value)){
      localStorage.removeItem(theinput.value);
      results.innerHTML=`Local Storsge Item Called <span>${theinput.value}</span>Deleted`;
      theinput.value='';
    } else{
      results.innerHTML=`No Local Storage Item With The Name <span>${theinput.value}</span>`;
    }
  } else{
    showMessage();
  }
}
function showItem(){ 
  if(localStorage.length){
    //console.log(`Found elements .${localStorage.length}`);
    for(let[key,value] of Object.entries(localStorage)){
      results.innerHTML+=`<span>${key}=>${value}</span><br><br>`
    }
  } else{
    results.innerHTML=`No Items in Local Storage`;
  }
}