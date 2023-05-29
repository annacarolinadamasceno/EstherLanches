'use strict';

const menus = document.getElementsByClassName('menu');
const tabButtons = document.getElementsByClassName('tab-button');
const tradicionaisTabButton = document.getElementById('tradicionais-tab-button');
const eggsTabButton = document.getElementById('eggs-tab-button');
const especiaisTabButton = document.getElementById('especiais-tab-button');
const bebidasTabButton = document.getElementById('bebidas-tab-button');

function openMenu(event, menuName) {
    let selectedMenu = document.getElementById(menuName);
    let tag = event.target;
    
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.style.display = 'none';
    }
    
    for (let index = 0; index < tabButtons.length; index++) {
        const tabButton = tabButtons[index];
        tabButton.className = tabButton.className.replace(' w3-red', '');
    }
    
    selectedMenu.style.display = 'block';
    tag.className = tag.className + ' w3-red';
}

function setMenuButtons(buttonOn) {    
    for (const tabButton of tabButtons) {
        tabButton.classList.remove('w3-red');
    }

    buttonOn.classList.add('w3-red');
}

function showSelectedMenu(menuName) {
    let selectedMenu = document.getElementById(menuName);

    for (const menu of menus) {
        menu.style.display = 'none';
    }
    
    selectedMenu.style.display = 'block';
}

function tabButtonClick(tabButton) {
    const buttonOn = tabButton;
    const menuName = tabButton.innerText;
    setMenuButtons(buttonOn);
    showSelectedMenu(menuName);
}

tradicionaisTabButton.addEventListener('click', (event) => {
    tabButtonClick(event.target);
});

eggsTabButton.addEventListener('click', (event) => {
    tabButtonClick(event.target);
});

especiaisTabButton.addEventListener('click', (event) => {
    tabButtonClick(event.target);
});

bebidasTabButton.addEventListener('click', (event) => {
    tabButtonClick(event.target);
});

tradicionaisTabButton.click();