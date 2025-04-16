const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoUrl = "mongodb://admin:password@mongodb:27017/kafkamessages?authSource=admin";
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;