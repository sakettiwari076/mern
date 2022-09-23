const mongoose=require('mongoose')

const DB=process.env.DATABASE;

mongoose.connect(DB, {
    // useCreatendex: true, 
//    useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true 

}).then(()=> {
    console.log('connection successfull');
}).catch((err) => console.log(err));
