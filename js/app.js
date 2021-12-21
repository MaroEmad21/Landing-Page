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
let sections = document.querySelectorAll('section');
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
        // declare the variable
        const activeLink =document.querySelector(`[href="#${section.id}"]`)
        // check if section is active
        if (section.classList.contains("your-active-class")){
            //if true remove 
            section.classList.remove("your-active-class")
        }
        // check if link is active
        else if (activeLink.classList.contains("your-active-class")) {
            // if true remove
            activeLink.classList.remove("your-active-class")
        }
        else {
            // continue to the next
            continue;
        }
    }


}

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
    // call the window function with scroll event
    window.addEventListener('scroll',()=> {
        // make the for each loop to check each section
        sections.forEach( (section)=>{
            // declare the corresponding anchor
            const corrLink =document.querySelector(`[href="#${section.id}"]`)
            // make the condtion
            if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < 350 ) {
                // check if it had class
                checkClass();
                // add the class to sction
                section.classList.add("your-active-class")
                //add the class to the corresponding anchor
                corrLink.classList.add("your-active-class")
                
            }})})
        }

activeView();