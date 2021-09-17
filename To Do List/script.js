
let button = document.getElementById("buttonAdd");
let allRemoveButtons;
i = 0;
j = 50;

eventLists();

function eventLists(){
    button.removeEventListener("click", addToTheList);
    button.addEventListener("click", addToTheList);
    getAllRemoveButtons();
    checkIfClicked();
}


function addToTheList(){
    //declarations
    let newLiValue = document.getElementById("addToListValue");
    let createLi = document.createElement("li");
    let inputStringValue = newLiValue.value;
    let currentList = document.getElementById("ul");
    //let listDiv = document.createElement("div");
    let listButton = document.createElement("button");

    if(inputStringValue == ""){
        let notice = document.getElementById("notice");
        notice.innerHTML = "PLEASE INPUT SOMETHING!";
        return;
    }
    else{
        notice.innerHTML = "";
    }
    
    //adding values to the newly created li
    createLi.innerHTML = inputStringValue;
    createLi.setAttribute("class", "listValues strike");
    createLi.setAttribute("id", j);
    j++;

    //clear input field
    newLiValue.value = '';

    //set values for button
    listButton.innerHTML = "X";
    listButton.setAttribute("class", "btn btn-primary removeFromList");
    listButton.setAttribute("id", i);
    i++;


    //append to LI
    createLi.appendChild(listButton);
    //listDiv.appendChild(createLi);
    

    //append to current list
    currentList.appendChild(createLi);

    //wala nay gamit, from previous algo
    //getAllRemoveButtons();
    eventLists();

}


function getAllRemoveButtons(){
    allRemoveButtons = document.getElementsByClassName("removeFromList");
}


//Checks if button is clicked
function checkIfClicked(){
    for( var z = 0; z < allRemoveButtons.length; z++){
        document.getElementById(z).onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}



//Checks if target LI is clicked
let allList = document.getElementById("ul");
allList.onclick = function(ev){
    if (ev.target.tagName == "LI"){
        if( ev.target.classList.contains("strike")){
            ev.target.classList.replace("strike", "through");
        }
        else{
            ev.target.classList.replace("through", "strike");
        }
        
    }
}



//Daghan ug unnecessary declarations and some functions.
//had many algorithms tried, but most of them did not work
// e.g assigning specific id# and if it is clicked kay the ID is sent to a function
//that is responsible for removing it from the UL using allList.remove(allList.childNode[index])
//but although it works na ma delete, but I keep gettings errors sa console.
//there was also another one nga supposedly every after removal kay mu assign ug new Id
//but it failed sa part nga pag delete









