const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send("Servidor Node.js em execução!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});