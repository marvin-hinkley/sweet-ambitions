var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    name: String,
    type: {type: Number, min: 0, max: 3},
    user: Schema.Types.ObjectId,
    notes: String,
    approved: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);