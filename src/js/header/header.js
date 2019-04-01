import './sticky-header.scss';
import './header';

export default class Header {
    constructor() {
        const emptyBlock = document.querySelector('.empty-block');
        this.getObserver().observe(emptyBlock);
        this.header = document.querySelector('.header');
        this.tableTitle = document.querySelector('.phone-book__thead');
    }

    getObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const checkIntersection = (enteries, observer) => {
            enteries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.header.classList.remove('sticky');
                    this.tableTitle.classList.remove('phone-book__sticky');
                } else {
                    this.header.classList.add('sticky');
                    this.tableTitle.classList.add('phone-book__sticky');

                }
            });
        }
        const observer = new IntersectionObserver(checkIntersection, options);
        return observer;

    };
}




