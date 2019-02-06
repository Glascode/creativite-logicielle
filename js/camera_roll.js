function changePreview() {
    document.querySelector('.js-pp-img').src = this.src;

    let target = document.querySelector('.target');
    target.setAttribute('data-label', this.getAttribute('data-target-label'));
    target.style.top = this.getAttribute('data-target-top');
    target.style.left = this.getAttribute('data-target-left');
}

function main() {

    /* Initialises the target */
    let target = document.querySelector('.target');
    target.style.top = target.getAttribute('data-top');
    target.style.left = target.getAttribute('data-left');

    /* Make each thumbnail clickable to change the preview accordingly*/
    let thumbnails = document.querySelectorAll('.js-cr-thumbnail');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', changePreview);
    });
}

window.onload = main();
