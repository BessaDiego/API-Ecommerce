const express = require('express')
const router = express.Router()

const path = require('path')

const UsersController = require('../controllers/UsersController')
router.get('/users',UsersController.showAll)
router.get('/users/:id',UsersController.show)
router.post('/users',UsersController.create)
router.put('/users/:id',UsersController.update)
router.delete('/users/:id',UsersController.delete)

const ProductsController = require('../controllers/ProductsController')
router.get('/products', ProductsController.showAll)
router.get('/products/:id', ProductsController.show)
router.post('/products', ProductsController.create)
router.put('/products/:id', ProductsController.update)
router.delete('/products/:id', ProductsController.delete)

const CategoriesController = require('../controllers/CategoriesController')
router.get('/categories', CategoriesController.showAll)
router.get('/categories/:id', CategoriesController.show)
router.post('/categories', CategoriesController.create)
router.put('/categories/:id', CategoriesController.update)
router.delete('/categories/:id', CategoriesController.delete)


router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router