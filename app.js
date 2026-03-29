
const formCallback = `
<div>
    <h2 class="form__title">Обратный звонок</h2>
</div>
<form name="" for="order" action="https://api.web3forms.com/submit" class="order__form" data-target="" method="POST">
    <input type="hidden" name="access_key" value="c7d4936d-9f30-47e5-af12-fcbf75e64cc6">
    <input type="text" id="user__name" class="order__name" placeholder="Введите имя" required>
    <label for="user__name" class="order__name--label">Введите имя</label>
    <input type="text" class="order__number" name="order" id="phone" placeholder="email@mail.com" required>
    <label for="phone" class="order__number--label">Почта</label>        
    <input type="date" id="user__date" class="order__date" required>
    <label for="user__date" class="order__date--label">Выберите дату</label>
    <textarea type="text" id="user__comment" class="order__comment" placeholder="Добавьте комментарий"  required></textarea>
    <label for="user__comment" class="order__comment--label">Добавьте комментарий</label>
    <button class="order__push">Заказать</button>
</form>
`;

const catalogBlock = `
<ul class="solutions__list">
    <li class="solutions__item">
    <a class="solution__link" href="./catalog.html">
    <img src="./images/lightning.svg" alt="lightning" class="solutions__pic">
<span>Электротехника</span>
<p>Кабели, провода,
электроустановочные изделия и
автоматика</p>
</a>
</li>
<li class="solutions__item">
<a class="solution__link" href="./catalog.html">
<img src="./images/house.svg" alt="house" class="solutions__pic">
<span>Отделочные материалы</span>
<p>Все для внутренней и внешней
отделки помещений любого типа</p>
</a>
</li>
                <li class="solutions__item">
                <a class="solution__link" href="./catalog.html">
                <img src="./images/pair.svg" alt="pair" class="solutions__pic">
                <span>Инструменты</span>
                <p>Профессиональное оборудование для
строительства и ремонта</p>
                </a>
                </li>
                <li class="solutions__item">
                <a class="solution__link" href="./catalog.html">
                <img src="./images/product.svg" alt="product" class="solutions__pic">
                <span>Сопутствующие товары</span>
                <p>Крепеж, расходники и средства
индивидуальной защиты</p>
                </a>
                </li>
            </ul>
`;

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

const backgroundModal = document.querySelector('.window');
const modal = document.querySelector('.modalWindow');
const modalClose = document.querySelector('.modal__close');
const modalContent = document.querySelector('.modal__content');
const callBack = document.querySelector('.header__button');
const catalogBtn = document.querySelector('.cover__catalog--btn');





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

const callbackForm = (event) => {
    render(formCallback);
};

const closeModal = (event) => {
    if (event.target.className === 'modal__close') {
        render('close');
    }
};

const catalogModal = (event) => {
    render(catalogBlock);
};

// const dropEngineer = (event) => {
//     console.log(`112`)
// }

// const dropFinish = (event) => {
//     console.log('222')
// }

// const dropTool = (event) => {
//     console.log('333')
// }

// const dropGoods = (event) => {
//     console.log('444')
// }

const render = (element) => {
    backgroundModal.style.display = 'flex';
    switch (true) {
        case element === formCallback:
            modalContent.innerHTML = formCallback;
            break;
        case element === 'close':
            backgroundModal.style.display = 'none';
            console.log('333')
            break;
        case element === catalogBlock:
            modalContent.innerHTML = catalogBlock;
            break;
        default:
            break;
    }
};

if (window.location.pathname === '/index.html') {
    const clistenCallback = callBack.addEventListener('click', callbackForm);
}
const clistenAboutList = aboutList.addEventListener('click', clickAboutList);
const clistenCatalogCover = catalogBtn.addEventListener('click', catalogModal);

const clistenClose = modalClose.addEventListener('click', closeModal);
// const listenEngineer = catalogEngineer.addEventListener('click', dropEngineer);
// const listenFinish = catalogFinish.addEventListener('click', dropFinish);
// const listenTool = catalogTool.addEventListener('click', dropTool);
// const listenGoods = catalogGoods.addEventListener('click', dropGoods);
