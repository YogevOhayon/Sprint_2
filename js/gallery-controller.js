'usr strict'

function renderGallery() {
    var elImgs = document.querySelector('.gallery')
    var strHTML = ''
    for (var i = 0; i < gImgs.length; i++) {
        strHTML += `<div class="gallery-item gallery-item-${i + 1}  " ><img src="img/${i + 1}.jpg" class="gallery-img" onclick="onImgSelect(${i + 1})"></div>`
    }
    elImgs.innerHTML = strHTML
}

function moveToSection(classToShow, classToHide,) {
    const elSectionToShow = document.querySelector(`.${classToShow}`)
    elSectionToShow.style.visibility = 'visible'
    const elSectionToHide = document.querySelector(`.${classToHide}`)
    elSectionToHide.style.visibility = 'hidden'
    const elGalleryLink = document.querySelector('.gallery-link')
    const elMemesLink = document.querySelector('.memes-link')
    console.log('elMemesLink:', elMemesLink);
    console.log('elGalleryLink:', elGalleryLink);
    if (classToShow === 'gallery') {
        elGalleryLink.classList.add('active')
        elMemesLink.classList.remove('active')
    }
    else {
        elGalleryLink.classList.remove('active')
        elMemesLink.classList.add('active')

    }
}



