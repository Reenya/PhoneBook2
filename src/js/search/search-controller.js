import * as phoneBook from '../phone-book/phone-book-controller';
import './search.scss';

const searchController = () => {
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
        phoneBook.changeSearch(searchField.value);
    }, 300);

    searchField.onkeyup = onKeyUpHandler;
};

export default searchController;
