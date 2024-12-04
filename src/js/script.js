// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const Lightboximg = document.querySelector('#lightbox img');
document.querySelectorAll('[data-full-img]').forEach((imgThumb)=>{
    imgThumb.addEventListener('click',(evt)=> {
        Lightboximg.src = imgThumb.dataset.fullImg;
        lightbox.showModal()   
    });
});


