const express = require('express');
const { addDoc, getDocs, collection, query, where } = require('firebase/firestore');
const db = require('../services/firebaseConfig.js');

const router = express.Router();

router.post('/sign', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Por favor, envie nome, email e senha.' });
        }

        const userCollection = collection(db, 'users');

        const snapshot = await getDocs(query(userCollection, where('email', '==', email)));
        if (!snapshot.empty) {
            return res.status(400).json({ error: 'Email já cadastrado.' });
        }

        const docRef = await addDoc(userCollection, { name, email, password });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: `Erro ao cadastrar usuário: ${error.message}` });
    }   
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Por favor, envie email e senha.' });
        }

        const userCollection = collection(db, 'users');

        const snapshot = await getDocs(
            query(userCollection, where('email', '==', email), where('password', '==', password))
        );

        if (snapshot.empty) {
            return res.status(401).json({ error: 'Email ou senha incorretos.' });
        }

        res.status(200).json({ message: 'Login realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: `Erro ao realizar login: ${error.message}` });
    }
});

module.exports = router;