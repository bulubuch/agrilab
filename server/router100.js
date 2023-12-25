const express = require("express");
const router = express.Router();
const data = require('./db/data');

module.exports = router;

router
    .get("/", (req, res) => {
       res.json("Hello world!!");
    });


router
    .get("/vegetables",(req,res)=>{
            res.json(data);
        })

router
    .get("/vegetable/:id",(req,res)=>{
            res.json(data.getVegetable(req.params.id));
        })

router
    .post('/vegetable',
        (req, res) => {
            const p = data.insertVegetable(req.body);
            res.status(201)
                .set('Location', '/vegetables/' + p.id)
                .json(p);
        })

router
    .delete('/vegetable/:id',
        (req, res) => {
            data.removeVegetable(req.params.id);
            res
                .status(204)
                .end();
        })

router
    .patch('/vegetable/:id',
        (req, res) => {
            data.updateVegetable(req.body);
            res
                .status(200)
                .json(req.body);
        })