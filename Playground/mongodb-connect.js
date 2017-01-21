/* jshint esversion: 6 */
// const MongoClient = require('mongodb').MongoClient;
// Destructring: this creates two variables MongoClient, ObjectID
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        return console.log('error connecting to local db');
    }
    console.log('connected to mongodb');

    // db.collection('Todos').insertOne({
    //     text: "try",
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log("some error: ", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });
    // db.collection('Users').insertOne({
    //     name: "harsh",
    //     age: 24,
    //     location: "Mumbai"
    // },(error, result) => {
    //     if(error){
    //            return console.log("some error: ", error);
    //        }
    //        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // });
    db.close();
});
