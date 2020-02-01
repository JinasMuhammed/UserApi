const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Userlogin = new Schema(
  {
    user_id: { type: Number },
    user_email: { type: String },
    user_password: { type: String },
    user_reg_date: { type: String }
  },
  {
    collection: 'userlogin'
  }
);

module.exports = mongoose.model('Userlogin', Userlogin);
