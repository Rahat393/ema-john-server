const express = require("express")
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config();

const products = require('./products.json')
// const products = require('jkhkhkjhkjhkjhkjhkj')

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(' sss server is running ...');
});

app.get('/products',  (req, res) => {
  res.send(products);
});
 
app.get('/products/search', (req, res) => {
  const query = req.query.searchTerm
  console.log('fff', req.query.searchTerm);
  if(query){
      const product = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
      res.send(product)
  }  
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id === id)
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});