const mongoose = require('mongoose');

const connect = async() => {
    return await mongoose.connect('mongodb+srv://root:Lobna@cluster0.4ymao.mongodb.net/Wikit?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

module.exports = connect;