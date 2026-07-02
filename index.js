let myLoeds = [];

const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const deleteButton = document.getElementById("delete-btn");
const saveTabButton = document.getElementById("save-tab");


const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLoeds"));
if(leadsfromlocalstorage){
                myLoeds=leadsfromlocalstorage;
                render(myLoeds);
}

// let tab = [
//     {url:"http"},
// ]
// chrome.tabs : API  programming interfase
saveTabButton.addEventListener("click",function(){
    
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        
        myLoeds.push(tabs[0].url);
        localStorage.setItem("myLoeds",JSON.stringify(myLoeds));
        render(myLoeds);
    
    });

});


inputButton.addEventListener("click",function(){
    myLoeds.push(inputEl.value.trim());
    
    localStorage.setItem("myLoeds",JSON.stringify(myLoeds));

    // ulEl.innerHTML += "<li><a href='"+inputEl.value+"' target='_blank'>"+inputEl.value+"</a></li>";
    render(myLoeds);
    inputEl.value="";

    console.log(localStorage.getItem("myLoeds"));
    
});
// dblclick which mean i need double click
deleteButton.addEventListener("dblclick",function(){
    localStorage.clear();
    myLoeds=[];
    // console.log("after deleting");
    // console.log(myLoeds);
    render(myLoeds);
});


function render(lead){
    // this appraoch is more efficient 🙈😅
    // let listItem = `<li><a href='${inputEl.value}'>${inputEl.value}</a></li>`;
    // ulEl.innerHTML += listItem ; 
    let listItem="";
    lead.forEach(function(e){
        listItem +=`<li><a href='${e}' target="_blank">${e}</a></li>`;
    });
    ulEl.innerHTML = listItem;

    // // --- Anotehr way to do this ---

    //  ulEl.textContent="";
    // myLoeds.forEach(function(e){
    // const newItem = document.createElement("li");
    // newItem.textContent = e ; 
    // ulEl.appendChild(newItem);
    // });

}

// example to ( template string )🤫
// let nameclient = "valko";
// let sender = "per albr"
// let email =`hi ${nameclient}
//         how are you doing? 
//         ${sender}` ;
// console.log(email);






// - for example : 

// const butt = document.getElementById("divel");

// butt.innerHTML = "<button id=\"btn\">buy</button>";
// buttonButton = document.getElementById("btn");
// buttonButton.addEventListener("click",()=>{
//    butt.innerHTML += "<p style=\"margin-top: 10px;\">Thank you for buying!</p>";
// });

//         ------------------------      //


















