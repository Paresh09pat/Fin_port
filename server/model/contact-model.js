const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  message: { type: String, required: true }
});
          
const ContactInfo = new model("contactInfo", contactSchema);

module.exports = ContactInfo;
