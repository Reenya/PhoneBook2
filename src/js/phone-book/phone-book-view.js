import {getObserver} from "../header/sticky";

export default class PhoneBookView {

    constructor(controller) {
        this.controller = controller;
        this.createItemsList();
    }

    createItemsList() {
        const table = document.querySelector('.phone-book');
        table.innerHTML = `<thead class="phone-book__thead">
                        <tr class="phone-book__row--title container">\n
                        <th class="phone-book__cell--title">First name</th>\n
                        <th class="phone-book__cell--title">Last name</th>\n
                        <th class="phone-book__cell--title">Phone number</th>\n
                        <th class="phone-book__cell--title">ZIP-code</th>\n
                    </tr></thead>
                    <tbody class="phone-book__tbody"></tbody>`;
        console.log(table.childNodes);
        const thead = document.querySelector('.phone-book__thead');
        getObserver().observe(thead);
         this.addItems();
    };

    addItems() {

        var table = document.querySelector('.phone-book__tbody');
        var tableContent = document.createDocumentFragment();
        this.controller.model.getNextData().then(({data, pos}) => {
            const listRows = document.querySelectorAll('.phone-book__row');
            let tempDataIndex = 0;
            for (let i = pos; i < Math.min(listRows.length, pos + data.length); i++) {
                listRows[i].childNodes[0].textContent = data[tempDataIndex].firstName;
                listRows[i].childNodes[2].textContent = data[tempDataIndex].lastName;
                listRows[i].childNodes[4].textContent = this.convertPhoneNumber(data[tempDataIndex].phoneNumber);
                listRows[i].childNodes[6].textContent = data[tempDataIndex].zipCode;
                tempDataIndex++;
            }

            if (listRows.length < pos + data.length) {
                //add dom elements
                for (let i = tempDataIndex; i < data.length; i++) {

                    var templateRow = document.createElement("tr");
                    templateRow.className = "phone-book__row";

                    templateRow.innerHTML =
                        `<td class="phone-book__cell">${data[i].firstName}</td>
                        <td class="phone-book__cell">${data[i].lastName}</td>
                        <td class="phone-book__cell">${this.convertPhoneNumber(data[i].phoneNumber)}</td>
                        <td class="phone-book__cell">${data[i].zipCode}</td>`;
                    tableContent.appendChild(templateRow);
                }
                table.appendChild(tableContent);
            } else {
                //delete all extra DOM items
                for (let i = pos + tempDataIndex; i < listRows.length; i++) {
                    listRows[i].parentNode.removeChild(listRows[i]);
                }
            }

            if (data.length > 5) {
                const listPerson = document.querySelectorAll('.phone-book__row');
                const index = listPerson.length < 5 ? listPerson.length - 1 : listPerson.length - 5;
                this.controller.getObserver().observe(listPerson[index]);
            }

        });
    };

    convertPhoneNumber(n) {
        return `+${n[0]} (${n[1]}${n[2]}${n[3]}) ${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`
    };

}






