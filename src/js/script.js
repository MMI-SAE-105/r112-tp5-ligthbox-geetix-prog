// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const lightboximg = document.querySelector('#lightbox img');
document.querySelectorAll('[data-full-img]').forEach((imgThumb)=>{
    imgThumb.addEventListener('click',(evt)=> {
        lightboximg.src = imgThumb.dataset.fullImg;
        lightbox.showModal()   
    });
});

lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie");
    lightbox.addEventListener("animationend", () => {
        lightbox.classList.remove("sortie");
        lightbox.close();
    }, {once: true});
});