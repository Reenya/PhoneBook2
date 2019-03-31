import './sticky-header.scss';
import './header';

export default class Header {
    constructor() {
        const emptyBlock = document.querySelector('.empty-block');
        this.getObserver().observe(emptyBlock);
        this.header = document.querySelector('.header');


    }

    getObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };


        const checkIntersection = (enteries, observer) => {
            // console.log(enteries);
            enteries.forEach(entry => {
                // const header = document.querySelector('.header');
                if (entry.isIntersecting){
                    this.header.classList.remove('sticky');

                } else {
                    this.header.classList.add('sticky');
                }
                // if (entry.intersectionRatio > 0) {
                //     // observer.unobserve(entry.target);
                //     // console.log(entry);
                // }
            });
        }
        const observer = new IntersectionObserver(checkIntersection, options);
        return observer;

    };
}




