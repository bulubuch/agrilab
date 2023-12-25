
const vegetables=[
    {id:0,name:'Carotte'},
    {id:1,name:'Navet'}
];

function getVegetables() {
    return vegetables;
}

function getVegetable(id) {
    return vegetables.find(p => p.id === +id);
}

function insertVegetable(p) {
    p.id = vegetables.length;
    vegetables.push(p);
    return p;
}

function removeVegetable(id) {
    vegetables = vegetables.filter(p => p.id !== +id);
}

function updateVegetable(vegetable) {
    vegetables = vegetables.map(p => p.id === +vegetable.id ? vegetable : p);
}

module.exports = {getVegetable, getVegetables, insertVegetable, updateVegetable, removeVegetable};