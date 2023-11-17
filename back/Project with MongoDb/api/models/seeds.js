'use strict';

var mongoose = require('mongoose')
var USER = require('models/userModel.js')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiyTopology: true }).then(() => {

    console.log("Mongo connection Open")
}).catch((err) => {
    console.log(err);
});



const seedUser = [
    {
        email: "admin",
        password: "admin",
        firstName: "admin",
        lastName: "admin"
    }
]


const seedDb = async () => {
    await USER.deleteMany({});
    await USER.insertMany(seedUser)

}
seedDb().then(() => {
    mongoose.connection.close()

})