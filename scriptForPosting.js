/* function newElement(){
//for deleting a post
 const items=document.querySelectorAll(".mid-part > div");

console.log(items);

for(let i=0;i<items.length;i++)
{
   items[i];
} 

//adding new element;

//  1. creating new element;
const newitem=document.createElement("div");
const newBtn = document.createElement("button");
const container=document.querySelector(".mid-part");
newitem.textContent=document.getElementById("myInput").value;

container.appendChild(newitem);



}
 */

const ul = document.querySelector(".mid-part > ul");
const input = document.querySelector("#myInput");
const btn = document.querySelector(".addBtn");

function addTodo(event){
   const todo = input.value;
   // input.value = "";
   const newitem=document.createElement("li");
   newitem.style.listStyle = "none";
   newitem.textContent = todo;
   ul.appendChild(newitem);
   const newBtn=document.createElement("button");
   newBtn.textContent="Delete";
   newBtn.classList.add("del");
   newitem.appendChild(newBtn);
    
   newitem.style.borderWidth="1px";
   newitem.style.borderColor="#939598";
   newitem.style.borderRadius="3px";
   newitem.style.display="border";
   newitem.style.backgroundColor="white";
   newitem.style.borderStyle="solid";
   newitem.style.marginTop="10px";
   newitem.style.marginLeft="20px";
   newitem.style.marginRight="20px";
   newitem.style.marginBottom="10px";
   newitem.style.padding="15px";
   newBtn.style.marginLeft="90%";
   newBtn.style.marginBottom="0%";


}

function deleteTodo(event)
{
   const clicked=event.target;
   const clickedIsDelBtn=clicked.matches(".del");
   if(clickedIsDelBtn){
      const delLi=clicked.parentElement;
      delLi.style.display="none";
   }
}
btn.addEventListener("click",addTodo);
ul.addEventListener("click",deleteTodo);

