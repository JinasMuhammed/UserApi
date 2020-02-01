const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Userstatus = new Schema(
{
	user_status_id: { type: Number },
	user_id: { type: Number },
	status_text : { type: String },
	status_time : { type: String }
},
{
	collection: 'userstatus'
});

module.exports = mongoose.model('Userstatus', Userstatus);