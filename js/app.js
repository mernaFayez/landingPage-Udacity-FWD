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
const sections =document.getElementsByTagName('section');
const navBar=document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Check If a Section is in the View Port
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (rect.top >= 0 && rect.top<=300);
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build The Navigation Bar
function buildMenu(){
    let docFragment= document.createDocumentFragment();
    for(let section of sections){
        let listItem=document.createElement('li');      
        let anchorItem=document.createElement('a'); 
        anchorItem.className='menu__link'; 
        anchorItem.href=`#${section.id}`;
        anchorItem.innerText=`${section.getAttribute('data-nav')}`;  
        listItem.appendChild(anchorItem);
        
        docFragment.appendChild(listItem);
    } 
   navBar.appendChild(docFragment) ;
}

// Add class 'active' to section when near top of viewport
function activateSection() {
    for(const section of sections){
        let navLink= document.querySelector(`a[href='#${section.id}']`);
        if(isInViewport(section)){ 
            section.classList.add('your-active-class');
            navLink.classList.add('active');
        }       
        else{
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    }  
}

// Smoothly Scroll to anchor ID using scrollIntoView
function smoothScroll(event){
    event.preventDefault();
    document.querySelector(event.target.attributes.href.value).scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildMenu();
// Scroll to section on link click
// 
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click',smoothScroll);
}); 

// Set sections as active
window.addEventListener('scroll', activateSection);



