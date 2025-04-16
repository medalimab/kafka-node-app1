const express = require('express');
const { run: runConsumer } = require('./consumer');
const { sendMessage } = require('./producer');
const connectDB = require('./db');
const Message = require('./models/Message');

const app = express();
const PORT = 3000;

// Connexion à MongoDB
connectDB();

// Démarrer les services Kafka
runConsumer().catch(console.error);
sendMessage().catch(console.error);

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Kafka-Node-App API!</h1>
    <ul>
      <li><a href="/messages">Voir tous les messages</a></li>
    </ul>
  `);
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/messages/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});