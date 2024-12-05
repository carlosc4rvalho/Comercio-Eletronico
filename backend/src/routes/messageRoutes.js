const express = require('express');
const { addDoc, getDocs, collection } = require('firebase/firestore');
const db = require('../services/firebaseConfig.js');

const router = express.Router();

router.post('/messages', async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;

        if (!fullName || !email || !phone || !message) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos: Nome Completo, Email Corporativo, Telefone e Mensagem.' });
        }

        const messageCollection = collection(db, 'messages');

        const docRef = await addDoc(messageCollection, {
            fullName,
            email,
            phone,
            message,
            timestamp: new Date(),
        });
        res.status(201).json({ message: 'Mensagem cadastrada com sucesso!', id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: `Erro ao cadastrar mensagem: ${error.message}` });
    }
});

router.get('/messages', async (req, res) => {
    try {
        const messageCollection = collection(db, 'messages');

        const snapshot = await getDocs(messageCollection);
        const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar mensagens: ${error.message}` });
    }
});

module.exports = router;