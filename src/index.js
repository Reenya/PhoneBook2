import './scss/main.scss';
import PhoneBookController from  './js/phone-book/phone-book-controller';
import SearchController from './js/search/search-controller';
import Header from "./js/header/header";


(function () {
    new PhoneBookController();
    new SearchController();
    new Header();

})();


