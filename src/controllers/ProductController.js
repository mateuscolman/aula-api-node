const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // new = true, é utilizado para que o moongose retorne o objeto atualizado                                          

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndDelete(req.params.id);
        
        return res.send();
    },

    async indexPaginate(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({ /* Aqui entra condições (Filtros) */ }, {page , limit: 10});

        return res.send(products);
        //const products = await Product.paginate({ }, { page: 1, limit: 10});
    }
}