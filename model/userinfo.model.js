const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Userinfo = new Schema(
{
	user_info_id: { type: Number },
	user_id: { type: Number },
	user_name: { type: String },
	user_location : { type: String }
},
{
	collection: 'userinfo'
});

module.exports = mongoose.model('Userinfo', Userinfo);