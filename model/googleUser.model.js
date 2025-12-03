const mongoose = require("mongoose")

const GoogleUserSchema = new mongoose.Schema({
username:{
type:String,
unique:true
},
email:{
type:String,
unique:true
},
phoneNumber:{
type:Number
}
})



const GoogleUserModel = mongoose.model("googleUser", GoogleUserSchema);
module.exports = GoogleUserModel;

