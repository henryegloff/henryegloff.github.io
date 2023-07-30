





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

var header = document.querySelector("#site-header");
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

const mobile_menu_open = false

const mobile_menu_button = document.getElementById('mobile-menu-button')
mobile_menu_button.addEventListener('click', () => {

    if(!mobile_menu_open) {
        document.body.setAttribute("mobile-menu","")
        mobile_menu_open = true
        document.getElementById("close-menu-button").focus({ focusVisible: true });
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
    mobile_menu_background.blur();
})


const close_menu_button = document.getElementById('close-menu-button')
close_menu_button.addEventListener('click', () => {
    document.body.removeAttribute("mobile-menu","")
    mobile_menu_open = false
    close_menu_button.blur();
})





// Fullscreen Button

const main_menu = document.getElementById('main-menu')

if (document.fullscreenEnabled || /* Standard syntax */
    document.webkitFullscreenEnabled || /* Safari */
    document.msFullscreenEnabled/* IE11 */) 
{
    document.body.setAttribute("fullscreen-supported","") 
    
}


const fullscreen_button = document.getElementById('fullscreen-button')
fullscreen_button.addEventListener('click', () => {
    toggle_fullscreen();
})


function toggle_fullscreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        document.body.setAttribute("fullscreen","") 
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        document.body.removeAttribute("fullscreen") 
    }              
}

function check_fullscreen() {
    // Because users can exit & enter fullscreen differently
    if (document.fullscreenElement  || document.webkitIsFullScreen || document.mozFullScreen) { 
    document.body.setAttribute("fullscreen","") 
    }
    else  { 
    document.body.removeAttribute("fullscreen") 
    }
}
setInterval(function(){ check_fullscreen();}, 1000); 






