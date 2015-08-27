var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
    name: String,
    body: String,
    author: Schema.Types.ObjectId,
    tags: [String],
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', PostSchema);