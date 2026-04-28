let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let container = document.querySelector('.container');

div1.addEventListener('click', function() {
    img1.style.display = 'flex';
    container.style.overflow = 'hidden';
});

div2.addEventListener('click', function() {
    img2.style.display = 'flex';
    container.style.overflow = 'hidden';
});
div3.addEventListener('click', function() {
    window.open('https://jayeqiu.github.io/diaries-of-crocodiles-2.0/', '_blank');
});
div4.addEventListener('click', function() {
    window.open('https://jayeqiu.github.io/the-poetics-of-language/', '_blank');
});
function hideImgBox(id) {
    if (id === 1) {
        img1.style.display = 'none';
    } else if (id === 2) {
        img2.style.display = 'none';
    }
    container.style.overflow = 'scroll';
}