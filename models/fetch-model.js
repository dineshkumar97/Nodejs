var mongoose=require('mongoose');
// create an schema
var userSchema = new mongoose.Schema({
            name: String,
            age:String
           
        });
module.exports=mongoose.model('Schools',userSchema);
        
