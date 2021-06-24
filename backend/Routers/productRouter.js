import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../Models/productModel.js';
import {isAdmin, isAuth, isSellerOrAdmin} from '../utils.js';

const productRouter = express.Router();

productRouter.get(
    '/', 
    expressAsyncHandler(async (req, res)=>{
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};
    const products = await Product.find({ ...sellerFilter }).populate(
      'seller',
      'seller.name seller.logo'
    );
    res.send(products);
    })
);

productRouter.get(
    '/seed',
    expressAsyncHandler (async( req, res ) => {
        await Product.remove({});
        const createdProduct = await Product.insertMany(data.products);
        res.send({createdProduct}); 
    })
);

productRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
  const product = await Product.findById(req.params.id).populate(
    'seller',
    'seller.name seller.logo seller.rating seller.numReviews'
  );
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Producto no encontrado'})
    }
}));

productRouter.post(
    '/',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async(req, res)=>{
        const product = new Product({
            name: 'Ingresa nuevo artículo',
            seller: req.user._id,
            image: '/images/p1.jpg',
            price: 'Ingresa precio',
            category: 'Ingresa categoría',
            brand: 'Ingresa marca',
            countInStock: 'Ingresa stock',
            rating: 0,
            numReviews: 0,
            description: 'Ingresa una descripción',
        });
        const createdProduct = await product.save();
        res.send({message: 'Producto creado', product: createdProduct});
    })
);

productRouter.put(
    '/:id',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.category = req.body.category;
        product.brand = req.body.brand;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({ message: 'Product Actualizado', product: updatedProduct });
      } else {
        res.status(404).send({ message: 'Producto no encontrado ' });
      }
    })
  );

  productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Producto eleminado', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Producto no encontrado' });
      }
    })
  );

export default productRouter