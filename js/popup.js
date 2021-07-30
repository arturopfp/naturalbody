let closeIcon = document.getElementById('closeicon');
let popUpContainer = document.getElementById('popUp-ctn');
let ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', () => {
    popUpContainer.classList.remove('display-none')
})

closeIcon.addEventListener('click', () => {
    popUpContainer.classList.add('display-none')
})
