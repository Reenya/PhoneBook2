;'use strict';
import './phone-book.scss';

import {addItems, createItemsList} from './phone-book-view';
import {changeState} from './phone-book-model';

const phoneBookController = () => {
    createItemsList();
};

const changeSearch = (searchWord) => {
    changeState(searchWord);
};

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
export default phoneBookController;
export {getObserver, changeSearch};
