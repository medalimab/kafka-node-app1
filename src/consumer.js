// src/consumer.js
const { Kafka } = require('kafkajs');
const connectDB = require('./db');
const Message = require('./models/Message');

const kafka = new Kafka({ 
  brokers: ['kafka:9092'],
  clientId: 'kafka-consumer'
});

const consumer = kafka.consumer({ groupId: 'kafka-mongo-group' });

// Exportez la fonction run
module.exports.run = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    await consumer.connect();
    console.log('Consumer connected to Kafka');

    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
    console.log('Subscribed to topic: test-topic');

    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          const content = message.value.toString();
          const newMessage = new Message({ content });
          await newMessage.save();
          console.log('Saved to MongoDB:', content);
        } catch (error) {
          console.error('Error processing message:', error);
        }
      },
    });
  } catch (error) {
    console.error('Error in consumer:', error);
  }
};

// Pour éviter l'avertissement du partitioner
module.exports.consumer = consumer;