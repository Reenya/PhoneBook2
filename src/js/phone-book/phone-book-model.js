import "babel-polyfill";

export default class PhoneBookModel {
    constructor(controller) {
        this.controller = controller;
        this.tempItem =0;
        this.countItems = 30;
        this.searchWord = '';
    };

    changeState (newSearchWord) {
        this.tempItem = 0;
        this.searchWord = newSearchWord;
        this.controller.view.addItems();
    };

    async getData  () {
        let dataURL = document.URL + 'src/data.json';
        let res = await fetch(dataURL);
        let body = await res.json();
        return this.searchItems(this.searchWord, body);
    };

    searchItems (searchWord, allItems){
        var itsFound = function (text) {
            text = text.toLowerCase();
            searchWord = searchWord.toLowerCase();
            return text.indexOf(searchWord) !== -1;
        };

        var result = allItems.filter(
            function (person) {
                return itsFound(person.firstName + ' ' + person.lastName + ' ' + person.phoneNumber + ' ' + person.zipCode);
            }
        );
        return result;
    }


    async getNextData () {
        const body = await this.getData();
        const result = body.slice(this.tempItem, this.tempItem + this.countItems);
        this.tempItem += result.length;
        return {data: result, pos: this.tempItem - result.length};
    };
}




