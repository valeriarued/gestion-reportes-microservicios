const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Auth Service funcionando 🚀');
});

app.listen(3000, () => {
    console.log('Auth Service corriendo en puerto 3000');
});