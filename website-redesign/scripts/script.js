





// Intersection Observer Transition

const articleElements = document.querySelectorAll("section article");
const h2Elements = document.querySelectorAll("section h2");
const sectionLink = document.querySelectorAll(".section-link");

const elementsToTransition = new Set([
    ...articleElements, 
    ...h2Elements,
    ...sectionLink
]);

elementsToTransition.forEach((el) => {
    el.classList.add('fade-on-off-screen');
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
};

function observerCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-on-in-view');
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
elementsToTransition.forEach((el) => observer.observe(el));



// Headroom (https://wicky.nillia.ms/headroom.js/)

var headroom_options = {

    // scroll tolerance in px before state changes
    tolerance : {
        up : 5,
        down : 5
    },

}

var header = document.querySelector(".site-header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(header, headroom_options);
// initialise
headroom.init();




// Toggle Light Mode


const light_mode_button = document.getElementById('light-mode-button')
const app = document.getElementsByTagName("BODY")[0];

light_mode_button.addEventListener('click', () => {

    

    if (localStorage.light_mode == "dark") {
        
        localStorage.light_mode = "light";
        app.setAttribute("light-mode", "light");

    } else {
        localStorage.light_mode = "dark";
        app.setAttribute("light-mode", "dark");
    }       
    

    light_mode_button.blur();
    
})

if (localStorage.light_mode == "dark") {
    app.setAttribute("light-mode", "dark");
}







// Mobile Menu

let mobile_menu_open = false

const mobile_menu_button = document.getElementById('mobile-menu-button')

mobile_menu_button.addEventListener('click', () => {

    if(!mobile_menu_open) {
        document.body.setAttribute("mobile-menu","")
        mobile_menu_open = true
    }
    else {
        document.body.removeAttribute("mobile-menu","")
        mobile_menu_open = false
    }    
    
    mobile_menu_button.blur();
    console.log("@")
    
})


const mobile_menu_background = document.getElementById('mobile-menu-background')

mobile_menu_background.addEventListener('click', () => {

    document.body.removeAttribute("mobile-menu","")
    mobile_menu_open = false
    
    //mobile_menu_background.blur();
    
})




