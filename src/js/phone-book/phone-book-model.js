'use strict';
import "babel-polyfill";
import {addItems} from "./phone-book-view";

let searchWord = '';
const changeState = (newSearchWord) => {
    tempItem = 0;
    searchWord = newSearchWord;
    addItems();
};

const countItems = 30;
let tempItem = 0;
const getData = async () => {
    let dataURL = document.URL + 'src/data.json';
    let res = await fetch(dataURL);
    let body = await res.json();
    return searchItems(searchWord, body);
};

const searchItems = (searchWord, allItems) => {
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


const getNextData = async () => {
    const body = await getData();
    const result = body.slice(tempItem, tempItem + countItems);
    tempItem += result.length;
    return {data: result, pos: tempItem - result.length};
};


export {getNextData, changeState};