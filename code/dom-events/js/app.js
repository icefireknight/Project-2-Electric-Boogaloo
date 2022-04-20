console.log('JS is linked to the html!'); // confirm the js is linked, by opening the devtools
//and looking for this log


//listen for a click event on our home button (element)

//1. Select the button element

const btnEl = document.querySelector('button');
//console.log(btnEl);

//2. Attach an event listen to the element (Now we want to attach the listen to our btnEl element)

btnEl.addEventListener('click', function(evt){
    console.log(evt)// This object has to do with the click event
    //what element was clicked on?
    //what element has the listener?
    //what location of the page did we click?

    //I want to take whats in the input
//1. Select the input of the dom
const inputEl = document.querySelector('input');
console.log(inputEl.value);

const liEl = document.createElement('li');
console.log(liEl);
liEl.textContent = inputEl.value

// PUT ON THE PAGE!

//We want to put the liEl at the end of the ul list
//Select the ul (cuz thats where we want to put the liEl)
const ulEl = document.querySelector('ul');
//Then add the liEl to the end
console.dir(ulEl);
ulEl.appendChild(liEl);
})


//When I click the Add Comment button




function handleClick(evt){
    console.log(evt)
}


const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', function(e){
    console.log(e.target);

    e.target.style.textDecoration = 'line-through'
})