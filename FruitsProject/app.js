const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please Check your Data Entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 34,
//     review: "Pretty solid as a fruit."
// });

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so Yummy!"
});


const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 6,
    review: "Decent Taste!"
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Updated The Record!");
    }
});

// const person = new Person ({
//     name: "John",
//     age: 37,
//     favouriteFruit: pineapple
// });

// person.save();

// fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The Best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 10,
//     review: "Too sour for me!"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 10,
//     review: "Weird Texture!"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

// Fruit.updateOne({_id: "622b5a72a1e44882c65529a4"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.");
//     }
// });


// Fruit.deleteOne({name: "Pineapple"}, function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully delete the record!");
//     }
// });

// Person.deleteMany({name: "John"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted!!!")
//     }
// });


Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        
        // mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

