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
let theFragment = document.createDocumentFragment();
// select the sections
let sections = document.getElementsByTagName('section');
// make parent element
let parentList = document.querySelector('ul');

/**
 * End Global Variables
 * helper Functions
 * 
 **/
// checking if section is active or not
function checkClass() {
    // start the loop
    for (const section of sections){
        // check if section is active
        if (section.classList.contains("your-active-class")){
            //if true remove 
            section.classList.remove("your-active-class")
        }
    }

}
checkClass();
 /* Begin Main Functions
 *
 * 
 *  
*/


// build the nav bar
function navbarFormation(){
    for (let section of sections) {
        //create list element
        let leList = document.createElement('li');
        // create anchor element
        let theLink = document.createElement('a');
        // add text name 
        theLink.textContent = section.dataset.nav;   
        //add class to the link item
        theLink.classList.add("menu__link");
        // add href attr to the anchor element
        theLink.setAttribute("href",`#${section.id}`);
        // add link to the list 
        leList.appendChild(theLink);
        // add the whole list to document Fragment
        theFragment.appendChild(leList);
        // Scroll to section on link click
        theLink.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        })
}
// add list to the parent list
    parentList.appendChild(theFragment);
}
// call the function
window.addEventListener("load",navbarFormation());


// active scroll and viewport
function activeView(){
    for (let section of sections) {
        let activeLink =document.querySelector(`[href="#${section.id}"]`);
        console.log(activeLink);
        section = document.getElementById(`${section.id}`);
        if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < 300 ) {
            
         section.classList.add("your-active-class");

        }
        
        
    }
}

window.addEventListener('scroll',activeView());
