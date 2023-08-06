



/* Icon - Light / Dark
------------------------- */

const icon_link = document.querySelector('link[rel="icon"]')
const prefers_light_mode = matchMedia('(prefers-color-scheme: light)')

function update_icon() {
    if (matchMedia('(prefers-color-scheme: light)').matches) {
        icon_link.href = 'https://henryegloff.com/_icons/favicon-light.ico'
    } else {
        icon_link.href = 'https://henryegloff.com/_icons/favicon.ico'
    }
}

prefers_light_mode.addEventListener('change', () => {
    update_icon()
})

update_icon()







/* Headroom
------------------------- */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).Headroom=n()}(this,function(){"use strict";function t(){return"undefined"!=typeof window}function d(t){return function(t){return t&&t.document&&function(t){return 9===t.nodeType}(t.document)}(t)?function(t){var n=t.document,o=n.body,s=n.documentElement;return{scrollHeight:function(){return Math.max(o.scrollHeight,s.scrollHeight,o.offsetHeight,s.offsetHeight,o.clientHeight,s.clientHeight)},height:function(){return t.innerHeight||s.clientHeight||o.clientHeight},scrollY:function(){return void 0!==t.pageYOffset?t.pageYOffset:(s||o.parentNode||o).scrollTop}}}(t):function(t){return{scrollHeight:function(){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},height:function(){return Math.max(t.offsetHeight,t.clientHeight)},scrollY:function(){return t.scrollTop}}}(t)}function n(t,s,e){var n,o=function(){var n=!1;try{var t={get passive(){n=!0}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){n=!1}return n}(),i=!1,r=d(t),l=r.scrollY(),a={};function c(){var t=Math.round(r.scrollY()),n=r.height(),o=r.scrollHeight();a.scrollY=t,a.lastScrollY=l,a.direction=l<t?"down":"up",a.distance=Math.abs(t-l),a.isOutOfBounds=t<0||o<t+n,a.top=t<=s.offset[a.direction],a.bottom=o<=t+n,a.toleranceExceeded=a.distance>s.tolerance[a.direction],e(a),l=t,i=!1}function h(){i||(i=!0,n=requestAnimationFrame(c))}var u=!!o&&{passive:!0,capture:!1};return t.addEventListener("scroll",h,u),c(),{destroy:function(){cancelAnimationFrame(n),t.removeEventListener("scroll",h,u)}}}function o(t){return t===Object(t)?t:{down:t,up:t}}function s(t,n){n=n||{},Object.assign(this,s.options,n),this.classes=Object.assign({},s.options.classes,n.classes),this.elem=t,this.tolerance=o(this.tolerance),this.offset=o(this.offset),this.initialised=!1,this.frozen=!1}return s.prototype={constructor:s,init:function(){return s.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(t){t.scrollTracker=n(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return"down"===t.direction&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return"up"===t.direction&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every(function(t){return this.classList.contains(t)},this.elem)},update:function(t){t.isOutOfBounds||!0!==this.frozen&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},s.options={tolerance:{up:0,down:0},offset:0,scroller:t()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},s.cutsTheMustard=!!(t()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame),s});

var headroom_options = {
    tolerance : {
        up : 5,
        down : 5
    },
}

var header = document.querySelector("#site-header");
var headroom  = new Headroom(header, headroom_options);
headroom.init();







/* Mobile Menu
------------------------- */

let mobile_menu_open = false

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






/* Intersection Observer
------------------------- */

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







/* Code Highlight Style
------------------------- */

if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
}







/* Light / Dark Mode
------------------------- */

const light_mode_button = document.getElementById('light-mode-button')
const app = document.getElementsByTagName("BODY")[0];
const dark_code_style = document.querySelector(`link[title="hljs-dark"]`)

//update_light_mode()



// First, get a value from localStorage if it exists

if (localStorage.light_mode == "dark") {
    app.setAttribute("light-mode", "dark"); 
    if (dark_code_style) {
        dark_code_style.removeAttribute("disabled");
    }
}





light_mode_button.addEventListener('click', () => {
    toggle_light_mode();
    light_mode_button.blur();
})







function toggle_light_mode() {

    if (localStorage.light_mode == "dark") { 
        
        localStorage.light_mode = "light";
        app.setAttribute("light-mode", "light");
       
        if (dark_code_style) {
            dark_code_style.setAttribute("disabled","");
        }

    } else {

        localStorage.light_mode = "dark";
        app.setAttribute("light-mode", "dark");
       
        if (dark_code_style) {
            dark_code_style.removeAttribute("disabled");
        }
    }   

}



window.addEventListener("storage", function () {
    if (localStorage.light_mode == "dark") {
        app.setAttribute("light-mode", "dark");
        if (dark_code_style) {
            dark_code_style.removeAttribute("disabled");
        }
    } else {
        app.setAttribute("light-mode", "light");
        if (dark_code_style) {
            dark_code_style.setAttribute("disabled","");
        }
    }
}, false);














/* Copy Code
------------------------- */

const copyButtonLabel = "Copy Code";
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {

    if (navigator.clipboard) {

        let button = document.createElement("button");
        button.innerHTML = copyButtonLabel;

        const script_type = block.getAttribute('script-type');

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });

        let code_header = document.createElement("div");
        code_header.innerHTML = script_type;
        code_header.classList.add('code-header');

        block.prepend(code_header);
        code_header.appendChild(button);
        block.appendChild(button);

    }
});


async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);
    button.innerText = "Code Copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 1000);
}








/* iframe toggle
------------------------- */

function toggle_iframe_access(overlay_id) {
    overlay_id.classList.toggle("iframe-overlay-disabled");
}

function toggle_iframe_access_button(e) {

    console.log("!")
    if (e.innerHTML === "Enable Controls") {
        e.innerHTML = "Disable Controls";
    } else {
        e.innerHTML = "Enable Controls";
    }

} 






/* Fluid Vids
------------------------- */

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});
    
fluidvids.init({selector: ['iframe', 'object'], players: ['www.youtube.com', 'player.vimeo.com'] }); 




/* Scroll to Top 
------------------------- */

const scroll_to_top_button = document.getElementById('scroll-to-top')

scroll_to_top_button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})




