const express = require('express');
const app = express();

app.use(express.json());

const orders = [
  {
    id: 1,
    userId: 1,
    productId: 2,
    quantity: 2,
    total: 60000
  }
];

// Obtener pedidos
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Crear pedido
app.post('/orders', (req, res) => {
  const order = req.body;

  orders.push(order);

  res.json({
    message: "Pedido creado con éxito",
    order
  });
});

app.listen(3003, () => {
  console.log("Pedidos Service running on port 3003");
});