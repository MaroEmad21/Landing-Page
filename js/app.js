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
let parentList = document.querySelector('ul');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const section of sections) {
    //create list element
    let leList = document.createElement('li');
    // create anchor element
    let theLink = document.createElement('a');
    // add text name 
    leList.textContent = section.dataset.nav;
    
    theLink.classList.add("menu__link");
    leList.appendChild(theLink);
    theGlobal.appendChild(leList);
}
parentList.appendChild(leList);





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


