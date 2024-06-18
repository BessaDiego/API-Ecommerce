const { Products } = require('../models')
require('dotenv').config()

module.exports = class ProductsController {
    static async showAll(req, res) {
        try {
            const products = await Products.findAll()
            res.status(200).json({ 
                data: products 
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
    static async show(req, res) {
        try {
            const products = await Products.findByPk(req.params.id)
            res.status(200).send(product);
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
    static async create(req, res) {
        try {
            const products = await Products.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                categoryId: req.body.categoryId
            })
            res.status(201).send("Produto Criado com Sucesso !!")
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
    static async update(req, res) {
        try {
            const products = await Products.findByPk(req.params.id)
            const result = await Products.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                categoryId: req.body.categoryId
            })
            res.status(200).send("Produto Atualizado com Sucesso !!");
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
    static async delete(req, res) {
        try {
            const products = await Products.findByPk(req.params.id)
            await Products.destroy()
            res.status(200).send("Excluido com Sucesso.")
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
}
