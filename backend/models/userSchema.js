const mongoose = require('mongoose');


// yaha pe ye define kro ki kya kya chaiya fields wagera 
const UserSchema = new mongoose.Schema(
    {
name:{
    type: String ,
    require:true,
},
email:{
    type: String ,
    require:true,
},
phone:{
    type: Number ,
    require:true,
},

work: {
    type: String ,
    require:true,

},
password: {
    type: String ,
    require:true,

},
cpassword: {
    type: String ,
    require:true,

},





    }
)
const User = mongoose.model('USER' , UserSchema);
modeule.exports = User ;