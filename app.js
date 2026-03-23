// const aboutFirst = document.querySelector('#item__first');
// const aboutSecond = document.querySelector('#item__second');
// const aboutThree = document.querySelector('#item__three');
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

const aboutItemAll = document.querySelector('.about__item');
const aboutList = document.querySelector('.about__list');
const nDialog = document.querySelector('.about__item--dialog');
const aboutItemArrow = document.querySelector('.about__item--arrow');
const aboutItemText = document.querySelector('.about__item--title');

// const clickAboutFirst = (event) => {
//     switch (true) {
//         case event.target.children[1].className === 'about__item--title' :
//             event.target.children[1].style.cssText += 'color: #052C65;';
//             break;
    
//         default:
//             break;
//     }
// };

// const clickAboutSecond = (event) => {
//     switch (true) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// };

// const clickAboutThree = (event) => {
//     switch (true) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// };

// const clickAboutItem = (event) => {
//     if (event.target.id === 'item__first' && event.target.classList[1] === 'noactive') {
//         event.target.children[1].style.cssText += `color: #052C65;`;
//         event.target.children[2].style.cssText += `transform: rotate(0deg);`;
//         event.target.className ='about__item active';
//         event.target.children[3].className = 'about__item--dialog dialog__active';
//         event.target.style.cssText += `margin-bottom: 6rem;`;
//         console.log(event.target);
//     }
// }

const clickAboutList = (event) => {
    switch (true) {
        case event.target.id === 'item__first' && event.target.className === 'about__item noactive':
            event.target.className = 'about__item active';
            event.target.children[1].style.cssText += `color: #052C65;`;
            event.target.children[2].style.cssText += `transform: rotate(0deg);`
            event.target.style.cssText += `margin-bottom: 6rem;`;
            event.target.children[3].className = 'about__item--dialog dialog__active';
            if (event.target.parentElement.id === 'item__first') {

            }
            break;
        case event.target.id === 'item__second' && event.target.className === 'about__item noactive':
            event.target.className = 'about__item active';
            event.target.children[1].style.cssText += `color: #052C65;`;
            event.target.children[2].style.cssText += `transform: rotate(0deg);`
            event.target.style.cssText += `margin-bottom: 6rem;`;
            event.target.children[3].className = 'about__item--dialog dialog__active';
            break;
        case event.target.id === 'item__three' && event.target.className === 'about__item noactive':
            event.target.className = 'about__item active';
            event.target.children[1].style.cssText += `color: #052C65;`;
            event.target.children[2].style.cssText += `transform: rotate(0deg);`
            event.target.style.cssText += `margin-bottom: 6rem;`;
            event.target.children[3].className = 'about__item--dialog dialog__active';
            break;
        default:
            if (event.target.parentElement.className === 'about__item active') {
                event.target.parentElement.className = 'about__item noactive';
                event.target.parentElement.children[1].style.cssText += `color: var(--black);`;
                event.target.parentElement.children[2].style.cssText += `transform: rotate(180deg);`
                event.target.parentElement.style.cssText += `margin-bottom: 0rem;`;
                event.target.parentElement.children[3].className = 'about__item--dialog dialog__noactive';
            }
            break;
    }
};

const all = (event) => {
    console.log(event);
};


// const listenAboutAll = aboutItemAll.addEventListener('click', clickAboutItem);
const listenAboutList = aboutList.addEventListener('click', clickAboutList);
const listenAll = document.addEventListener('click', all);


// const listenAboutFirst = aboutFirst.addEventListener('click', clickAboutFirst);
// const listenAboutSecond = aboutSecond.addEventListener('click', clickAboutSecond);
// const listenAboutThree = aboutThree.addEventListener('click', clickAboutThree);