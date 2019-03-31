import EventBus from '../event-bus';
import './search.scss';

export default class SearchController  {
    constructor() {
        this.searchField = document.querySelector('.search__field');

        this.searchField.onkeyup = this.debounce(function () {
            EventBus.publish('changeSearchWord',this.value);
        }, 300);

    }

    debounce(func, wait) {
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
};

