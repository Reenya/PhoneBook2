;'use strict';
const getRandom =  (num, min = 0) => Math.floor(Math.random() * num) + min;


const getFirtsName = () => {
    var names = ['Andre', 'Ronald', 'Lauren', 'Liana', 'Jaelyn', 'Lexie', 'Felicia', 'Carla', 'Deshaun','Ethan','Steven','Allison','Pierce','Richard'];
    return names[getRandom(names.length)];
};

const getLastName = () => {
    var lastNames = ['Ziegler', 'Black', 'OKeefe', 'Doyle', 'Gibbs', 'Wagner', 'Meredith', 'Anderson', 'Fletcher','Bryant'];
    return lastNames[getRandom(lastNames.length)];
};

const getPhone = () => getRandom(90000000000,10000000000);


const getZip = ()=>  getRandom(900000, 100000);

const Person = function (fn,ln,pn,zc) {
    this.firstName = fn;
    this.lastName =ln;
    this.phoneNumber = pn;
    this.zipCode = zc;
};


let dataJSON = [];
for (let i =  1; i<500;i++){
    dataJSON.push(new Person(getFirtsName(),getLastName(),getPhone()+'',getZip()+''));
}
dataJSON = JSON.stringify(dataJSON,'',4);
