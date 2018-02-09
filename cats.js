var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temp: String
});

var Cat = mongoose.model('Cat', catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temp: "Evil"
// });
// george.save(function(err, cat){
//   if(err){
//       console.log("Something went wrong");
//   } else {
//       console.log("Saved cat");
//       console.log(cat);
//   }
// });

Cat.create({
    name: "Garfield",
    age: 2,
    temp: "Sleepy"
}, function(err, cat){
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
   if(err){
        console.log("Oh no!, error!");
        console.log(err);
   } else {
       console.log("All the cats...");
       console.log(cats);
   }
});