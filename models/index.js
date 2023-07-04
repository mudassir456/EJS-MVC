
var mongoose = require('mongoose');

async function connectionWithMongoDB() {
    try {
        var connectionURI = 'mongodb://127.0.0.1/my_database';
        await mongoose.connect(connectionURI, { useNewUrlParser: true });
        console.log("successfully connected")

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectionWithMongoDB

