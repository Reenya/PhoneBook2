;'use strict';
const getRandom =  (num, min = 0) => Math.floor(Math.random() * num) + min;


const getFirtsName = () => {
    var names = ['Andre', 'Ronald', 'Lauren', 'Liana', 'Jaelyn', 'Lexie', 'Felicia', 'Carla', 'Deshaun'];
    return names[getRandom(names.length)];
};

const getLastName = () => {
    var lastNames = ['Ziegler', 'Black', 'OKeefe', 'Doyle', 'Gibbs', 'Wagner', 'Meredith', 'Anderson'];
    return lastNames[getRandom(lastNames.length)];
};

const getPhone = () => '+ ' + getRandom(999, 1) + '(' + getRandom(900, 100) + ')' + ' ' + getRandom(900, 100) + '-' + getRandom(9000, 1000);


const getZip = ()=>  getRandom(900000, 100000);


export {getRandom, getFirtsName,getLastName,getPhone,getZip};