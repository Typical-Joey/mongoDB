// This program describes how to use mongoose, a framework to make using MongoDB easier with node.js

const mongoose = require("mongoose");

// Connects to mongoDB server, port 27017 is a default port, the last part of the string is the Database name,
// if it does not exist it will make a new database.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Create a Schema (Blueprint for all objects in the collection)
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Creates the collection, first parameter is collection name
const Fruit = mongoose.model("Fruit", fruitSchema);

// Creates new object in the collection
const apple = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Apples are prety solid!"
});
// After doing it once its better to comment it out so there arent repeats in collection
//fruit.save();

// To save many objects
const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Bananas are amazing, great in smoothies"
});

const orange = new Fruit({
    name: "Orange",
    rating: 7,
    review: "Pretty good"
});

const lemon = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Really sour, don't eat raw"
});

// Callback function just checks for errors
Fruit.insertMany([banana, orange, lemon], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully added all objects to colleciton");
    }
});


// Create a Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// Creates the collection
const Person = mongoose.model("Person", personSchema);

// Creates new object in the collection
const person = new Person({
    name: "Joseph",
    age: 19,
});

// After doing it once its better to comment it out so there arent repeats in collection
//person.save();