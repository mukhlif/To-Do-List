//get ul
const items=document.querySelector('ul.collection');
//get input
const val=document.querySelector('input#task');
//get button
const btn=document.querySelector('#btn');
//get heading
const edit=document.querySelector('h3.pushMe');
const div=document.querySelector('div.master');


loadEventsListeners();
function loadEventsListeners(e){

    btn.addEventListener('click',createElement);
    items.addEventListener('click',removeList);

}
function createElement(e){
    //check the input
    if(val.value==''){
        edit.append(document.createTextNode('Please fill the field!'));
        edit.style.color='red';
        edit.className='mt-2';
        
    }else if(val.value!=''){
        //create li
    const list=document.createElement('li');
    list.className='bg-primary w-100 p-1 fs-5 mt-2';
    list.appendChild(document.createTextNode(`${val.value}`));

//append to the ul
    items.appendChild(list);
//create link
    const link=document.createElement('a');
    link.className='btn btn-warning btn-sm ms-5';
    link.append(document.createTextNode('Delete'));
    list.appendChild(link);
//Delete lists
   
 
    }
//Clear the field
document .querySelector('input#task').value='';
    e.preventDefault();
    headIng.innerHTML='';

} 
function removeList(e){
    if(e.target.classList.contains('ms-5')){
        e.target.parentElement.remove();
    }
    e.preventDefault();
}
