/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// declare the document Fragment

let theGlobal = document.createDocumentFragment();
// select the sections
let sections = document.getElementsByTagName('section');
// make parent element
let parentList = document.querySelector('ul');
let Links = document.getElementsByTagName('a');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function getTop() {
//}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navbarFormation(){
for (const section of sections) {
    //create list element
    let leList = document.createElement('li');
    // create anchor element
    let theLink = document.createElement('a');
    // add text name 
    theLink.textContent = section.dataset.nav;   
    //add class to the link item
    theLink.classList.add("menu__link");
    // add href attr to the anchor element
    theLink.setAttribute("href","#"+`${section.id}`);
    // add link to the list 
    leList.appendChild(theLink);
    // add the whole list to document Fragment
    theGlobal.appendChild(leList);
}
// add list to the parent list
parentList.appendChild(theGlobal)
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
window.addEventListener('click', (evt) => {
    // prevent the default
    evt.preventDefault();
    // declare the selected setion
    
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: "smooth"
    })
})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



// call the functions
navbarFormation();