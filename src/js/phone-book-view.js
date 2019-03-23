;'use strict';

import {getNextData} from './phone-book-model';
import getObserver from './phone-book-controller';
const refreshItemsList = () => {
    const table = document.querySelector('.phone-book');
    table.innerHTML = '<tr class="phone-book__row--title">\n' +
        '                <th class="phone-book__cell phone-book__cell--title">First name</th>\n' +
        '                <th class="phone-book__cell phone-book__cell--title">Last name</th>\n' +
        '                <th class="phone-book__cell phone-book__cell--title">Phone number</th>\n' +
        '                <th class="phone-book__cell phone-book__cell--title">ZIP-code</th>\n' +
        '            </tr>';
    addItems();

}
const addItems = () => {

    var table = document.querySelector('.phone-book');
    var tableContent = document.createDocumentFragment();
    getNextData().then((data) => {
        data.forEach(function (person) {
            var templateRow = document.createElement("tr");
            templateRow.className = "phone-book__row";
            templateRow.innerHTML =
                '<td class="phone-book__cell">' + person.firstName + '</td>' +
                '<td class="phone-book__cell">' + person.lastName + '</td>' +
                '<td class="phone-book__cell">' + person.phoneNumber + '</td>' +
                '<td class="phone-book__cell">' + person.zipCode + '</td>';
            tableContent.appendChild(templateRow);
        });

        table.appendChild(tableContent);
        const listPerson = document.querySelectorAll('.phone-book__row');
        getObserver().observe(listPerson[listPerson.length-5]);
    });
};

export {refreshItemsList,addItems} ;


