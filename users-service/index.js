const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Oscar Triana", city: "Manizales" },
  { id: 2, name: "Clara Buitrago", city: "Chinchiná" }
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({
    message: "Cliente creado",
    user
  });
});

app.listen(3001, () => {
  console.log("Clientes Service running on port 3001");
});