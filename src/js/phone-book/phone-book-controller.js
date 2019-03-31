import './phone-book.scss';
import EventBus from '../event-bus';
import PhoneBookView from './phone-book-view';
import PhoneBookModel from './phone-book-model';

export default class PhoneBookController {
    constructor() {
        this.model = new PhoneBookModel(this);
        this.view = new PhoneBookView(this);

        EventBus.subscribe('changeSearchWord', this.changeSearch.bind(this));
    }


    changeSearch  (searchWord) {
        this.model.changeState(searchWord);
    };

    getObserver  () {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        const checkIntersection = (enteries, observer) => {
            enteries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    observer.unobserve(entry.target);
                    this.view.addItems();
                }
            });
        }
        const observer = new IntersectionObserver(checkIntersection, options);
        return observer;

    }
};
