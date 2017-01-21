/* jshint esversion: 6 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        return console.log('error connecting to local db');
    }
    console.log('connected to mongodb');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (error) => {
    //     console.log(error);
    // });
    //
    // db.collection('Todos').find({completed: false}).count().then((count) => {
    //     console.log("Todos:count ", count );
    // }, (error) => {
    //     console.log(error);
    // });

    db.collection('Users').find({name: "harsh"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    }, (error) => {
        console.log(error);
    });
    // db.close();
});
