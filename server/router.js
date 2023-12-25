const express = require("express");
const router = express.Router();
const routerV100 = require('./router100');

module.exports = router;

const products=[
    {id:0,name:'Carotte'},
    {id:1,name:'Navet'}
];

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

router
    .get("/", (req, res) => {
       res.json("Hello world!!");
    });

router
    .use((req, res) => {
        res.status(404);
        res.json({
            error: "Page not found"
        });
    });

router
    .get("/vegetables",(req,res)=>{
            res.json(vagatables);
        })

router
    .get("/vegetable/:id",(req,res)=>{
            res.json(getVegetable(req.params.id));
        })

router
    .post('/vegetable',
        (req, res) => {
            const p = insertVegetable(req.body);
            res.status(201)
                .set('Location', '/vegetables/' + p.id)
                .json(p);
        })

        function removeVegetable(id) {
            vegetables = vegetables.filter(p => p.id !== +id);
        }

router
    .delete('/vegetable/:id',
        (req, res) => {
            removeVegetable(req.params.id);
            res
                .status(204)
                .end();
        })

router
    .patch('/vegetable/:id',
            (req, res) => {
                updateVegetable(req.body);
                res
                    .status(200)
                    .json(req.body);
            })