// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5aa81e328f73ef12900e5ec2')
        },
        {
            $inc: {
                age: -1
            },
            $set: {
                location: "Stuttgart",
                address: "Buhlstr. 3, 71272 Renningen"
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    })

    // client.close();
});
