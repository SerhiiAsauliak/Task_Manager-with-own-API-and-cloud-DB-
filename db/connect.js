const mongoose = require('mongoose')

const connectDB = (URL) => {
    return mongoose.connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Success DB connect'))
    .catch((err) => console.log('DB connect error', err))
}

module.exports = connectDB