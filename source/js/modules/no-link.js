'use strict';

(function() {
    const noLink = document.querySelectorAll('.js-no-link');

    noLink.forEach((item) => {
        item.addEventListener('click' , (event) => {
            event.preventDefault();
        })
    })

}());
