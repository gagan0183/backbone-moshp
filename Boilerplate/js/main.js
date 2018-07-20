
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize: function() {
        console.log("A song create");
    },
    validate: function(attrs) {
        if(!attrs.p) {
            return  "This value is not there";
        }
    }
});

var song = new Song();
console.log(song);

console.log('Before setting attribute : ', song.isValid());
console.log('Before setting attribute : ', song.validationError);

song.set('p', 'p');
console.log('After setting attribute : ', song.isValid());
console.log('After setting attribute : ', song.validationError);