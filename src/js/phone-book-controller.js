;'use strict';

import '../scss/search.scss'
import {addItems, refreshItemsList} from './phone-book-view';
import {changeState} from './phone-book-model';

refreshItemsList();
const searchField = document.querySelector('.search__field');
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            func.apply(context);
        }, wait);
    };
};
const onKeyUpHandler = debounce(function () {
    changeState(searchField.value);
}, 300);

searchField.onkeyup = onKeyUpHandler;

const getObserver =() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };

    const checkIntersection = (enteries, observer) => {
        enteries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                addItems();
            }
        });
    }
    const observer = new IntersectionObserver(checkIntersection, options);
    return observer;

}

export default getObserver;
