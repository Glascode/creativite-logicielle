function changePreview() {
    document.querySelector('.js-picture-preview-img').src = this.src;
    document.querySelector('.js-next-link').href = this.getAttribute('data-href');
}

function main() {
    /* Make each thumbnail clickable to change the preview accordingly */
    let thumbnails = document.querySelectorAll('.js-gallery-item');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', changePreview);
    });
}

window.onload = main();
