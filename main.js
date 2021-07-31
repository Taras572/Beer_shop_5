
//завдання 1
console.log('-------------завдання 1---------------')
function clicker() {
    let count = 0;
    this.sum = function (sum) {
        console.log(count += sum);
    }
}
let add = new clicker();
add.sum(15);
add.sum(25);
add.sum(100);

//завдання 2
console.log('-------------завдання 2---------------')

let BANK = document.querySelector('.bank');
let BEER = document.querySelector('.beer');
let VINE = document.querySelector('.vine');
let PEPSI = document.querySelector('.pepsi');
let TEXT = document.querySelector('.text');
let F1 = document.forms.f1;
let product = "beer";
let product_name = document.getElementById('id1').parentElement.textContent;
let ADD_BTN = document.querySelector('.Add_btn');
let BUY_BTN = document.querySelector('.Buy_btn');
let ADD_LIST = document.querySelector('.add_list');
let price = 0;
let CLOSE = document.querySelector('.uil-times');
let MODAL = document.querySelector('.modal');

function inform() {
    BANK.textContent = `${MARKET.getBank()} грн`;
    BEER.textContent = `${MARKET.getStorage('beer')} шт`;
    VINE.textContent = `${MARKET.getStorage('vine')} шт`;
    PEPSI.textContent = `${MARKET.getStorage('pepsi')} шт`;
};

inform();

F1.addEventListener('click', function (radio) {
    if (radio.target.type == 'radio') {
        product = radio.target.value;
        product_name = radio.target.parentElement.textContent;
    };
});

ADD_BTN.addEventListener('mouseup', () => {
    ADD_BTN.style.backgroundColor = 'rgb(214, 205, 205)';
});
ADD_BTN.addEventListener('mousedown', () => {
    ADD_BTN.style.backgroundColor = 'rgb(190, 186, 186)';
});
BUY_BTN.addEventListener('mouseup', () => {
    BUY_BTN.style.backgroundColor = 'rgb(214, 205, 205)';
});
BUY_BTN.addEventListener('mousedown', () => {
    BUY_BTN.style.backgroundColor = 'rgb(190, 186, 186)';
});

//Close modal
CLOSE.addEventListener('mouseup', () => {
    CLOSE.style.color = 'black';
});
CLOSE.addEventListener('mousedown', () => {
    CLOSE.style.color = 'rgb(190, 186, 186)';
});
CLOSE.addEventListener('click',()=>{
    MODAL.style.display = 'none';
})

// Add btn
ADD_BTN.addEventListener('click', () => {
    if (+F1.elements[0].value && +F1.elements[0].value <= MARKET.getStorage(product)) {
        ADD_LIST.innerHTML += `<p>${product_name}: ${F1.elements[0].value} шт</p>`;
        price += MARKET.sell(TEXT.value, product);
        
    }
    else{
        /* alert(MARKET.sell(TEXT.value,product)); */
        MODAL.firstElementChild.textContent = MARKET.sell(TEXT.value,product);
        MODAL.style.display = 'block';
        
    }
});

//Buy btn
BUY_BTN.addEventListener('click', () => {
    inform();
    document.querySelector('.block3').innerHTML = ADD_LIST.innerHTML + 'Всього: ' + price + ' Гривень';
});

import * as MARKET from './shop.js';

