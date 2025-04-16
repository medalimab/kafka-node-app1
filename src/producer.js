// src/producer.js
const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-producer',
  brokers: ['kafka:9092'],
  createPartitioner: Partitioners.LegacyPartitioner // Supprime l'avertissement
});

const producer = kafka.producer();

// Exportez la fonction sendMessage
module.exports.sendMessage = async () => {
  await producer.connect();
  setInterval(async () => {
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: `Message at ${new Date().toISOString()}` }],
    });
    console.log('Message sent');
  }, 3000);
};