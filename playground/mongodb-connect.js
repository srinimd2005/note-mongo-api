// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5aa516b67b6a305e4962d149')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({name: 'Srini'}).toArray().then((docs) => {
        // console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert ToDo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // client.close();
});
