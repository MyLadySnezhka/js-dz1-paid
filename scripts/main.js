const el1 = document.querySelector('.block1');
const el2 = document.querySelector('.block2');
const el3 = document.querySelector('.block3');

el1.addEventListener('click', (ev) => {
    el1.style.backgroundColor = 'yellowgreen';
    el1.innerHTML = 'Good Luck!';
});

el2.addEventListener('click', (ev) => {
    el2.style.fontSize = '32px';
    el2.style.backgroundColor = 'yellow';
    el2.style.height = '240px';
    el2.innerHTML = 'Warning!';
});

el3.addEventListener('click', (ev) => {
    el3.style.height = '300px';
    el3.style.backgroundColor = 'red';
    el3.style.fontSize = '44px';
    el3.innerHTML = 'Alarm!!!';
});
