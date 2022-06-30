const TaskDom = document.querySelector('#task')
const ListDom = document.querySelector('#list')
const buttonDom = document.querySelector('#liveToastBtn')



TaskDom.addEventListener('keyup',function(e){

    if (e.keyCode == 13 ) { 
        newElement()
    } // to add something with enter key
    
   
});

 
    function newElement(){
    if ( TaskDom.value != "" ) { // if bar is empty function is not working
    let liDom = document.createElement('li')
    let deleteButtonDom = document.createElement('button')
    deleteButtonDom.classList.add('deleteButton')
    deleteButtonDom.innerHTML = "x"
    liDom.innerHTML = TaskDom.value
    ListDom.appendChild(liDom)
    liDom.appendChild(deleteButtonDom)
    TaskDom.value = "" // it is for  clear bar after function works
    deleteButtonDom.addEventListener ('click', function(){
        ListDom.removeChild(liDom); // it is for delete button

            
          });
    
    }
    
    
}

