const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Café Supremo", origin: "Caldas", price: 25000 },
  { id: 2, name: "Café Orgánico", origin: "Caldas", price: 30000 }
];

// Obtener productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Crear producto
app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({
    message: "Producto agregado",
    product
  });
});

app.listen(3002, () => {
  console.log("Productos Service running on port 3002");
});