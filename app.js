const contentText = document.querySelector('.content');

document.addEventListening('DOMContentLoaded', function() {
    contentText.innerHTML = "This is the content";
}, false);