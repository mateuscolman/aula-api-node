const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/page', ProductController.indexPaginate);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;