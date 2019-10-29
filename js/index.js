//1. Resizing the window
const resizeWin = document.querySelector("body");
// console.log(resizeWin);
window.addEventListener("resize", doneResizing((event) => {
    document.body.textContent = 'oh no...';
    document.body.style.fontSize = "400px";
    event.stopPropagation();
}));

function doneResizing(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
    };
}

//2. Hovering mouse over images
const hoverImg = document.querySelectorAll("img");
// console.log(hoverImg);
hoverImg.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.src = 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        event.stopPropagation();
    })
})

hoverImg.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.src = 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        event.stopPropagation();
    })
})

//3.Wheeling through the page
const spookyScroll = document.querySelectorAll("p");
spookyScroll.forEach(element => {
    window.addEventListener("wheel", () => {
        element.textContent = '🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️';
        element.style.fontSize = "30px";
    })
})

//4.Double Click the Fun Bus logo
const changeLogo = document.querySelector('.logo-heading');
changeLogo.addEventListener("dblclick", () => {
  changeLogo.textContent = "Spoopy Bus"
})

//5. Changes text to spiders as you highlight (NOT WORKING)
const spiderText = document.querySelectorAll("p");
spiderText.forEach(element => {
    element.addEventListener("select", () => {
        element.textContent = 'poot';
        element.style.fontSize = "30px";
    })
})

//6. Spooky ghosts replace text when copying
const ghostlyCopy = document.querySelectorAll("p");
ghostlyCopy.forEach(element => {
    element.addEventListener("copy", () => {
        element.textContent = '👻👻👻👻👻👻👻';
        element.style.fontSize = "30px";
    })
})

//7. Clicking the Home button changes background color
const colorTheme = document.querySelector("nav a");
colorTheme.addEventListener("click", () => {
 document.body.style.backgroundColor="orange";
})

//8. Pressing any key replaces spiders with explosions. (NOT WORKING)
const spiderSquish = document.querySelectorAll("p");
spiderSquish.forEach(element => {
    if (element.textContent === '🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️🕷️') {
        window.addEventListener('keydown', () => {
        element.textContent = "fart";
        document.body.style.backgroundColor="orange";
        console.log(element.textContent);
        })
    }
})

//9. A user tries to drag an image
const dragImg = document.querySelectorAll("img");
dragImg.forEach(element => {
    element.addEventListener("drag", () => {
        element.src = 'https://images.unsplash.com/photo-1541877057445-c90b478d53d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
    })
})

//10. Changes the first h2 header to a different string
const headerSwap = document.querySelector(".intro h2");
console.log(headerSwap);
window.addEventListener("keydown", () => {
    headerSwap.textContent = "What a Horrible Night to Have a Curse";
})

//11. Plays a sound when the signUp button is clicked
const sound = new Audio('audio/LTTP_Secret.wav');
const playJingle = document.querySelectorAll(".btn");
playJingle.forEach(element => {
    element.addEventListener("auxclick", () => {
        sound.play();
    })
})

//12. Defaults the navigation elements to not refresh the page
const stopLinks = document.querySelectorAll("nav a");
console.log(stopLinks);
stopLinks.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    })
})

//13. 
