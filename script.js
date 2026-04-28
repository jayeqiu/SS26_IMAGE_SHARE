let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

div1.addEventListener('click', function() {
    img1.style.display = 'flex';
});

div2.addEventListener('click', function() {
    img2.style.display = 'flex';
});
div3.addEventListener('click', function() {
    window.open('https://jayeqiu.github.io/diaries-of-crocodiles-2.0/', '_blank');
});
function hideImgBox(id) {
    if (id === 1) {
        img1.style.display = 'none';
    } else if (id === 2) {
        img2.style.display = 'none';
    }
}