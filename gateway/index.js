const express = require('express');
const axios = require('axios');

const app = express();

// CLIENTES
app.get('/clientes', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error en Clientes Service" });
  }
});

// PRODUCTOS (CAFÉ)
app.get('/productos', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error en Productos Service" });
  }
});

// PEDIDOS
app.get('/pedidos', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3003/orders');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error en Pedidos Service" });
  }
});

app.listen(3000, () => {
  console.log("🚀 1918 Koffee: Gateway de Café Especial funcionando en puerto 3000");
});