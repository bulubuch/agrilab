
const products=[
    {id:0,name:'Carotte'},
    {id:1,name:'Navet'}
];

function getProducts() {
    return products;
}

function getProduct(id) {
    return products.find(p => p.id === +id);
}

function insertProduct(p) {
    p.id = products.length;
    products.push(p);
    return p;
}

function removeProduct(id) {
    products = products.filter(p => p.id !== +id);
}

function updateProduct(product) {
    products = products.map(p => p.id === +product.id ? product : p);
}

module.exports = {getProduct, getProducts, insertProduct, updateProduct, removeProduct};