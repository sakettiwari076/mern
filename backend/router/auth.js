const express=require('express')

const router = express.Router();



router.get('/', (req, res )=> {
    // console.log('heuuu')
    res.send('HELLO WORLD ye to router wka')
    } );
   


    // data lena hai user se 
    router.post('/register', (req , res) => {
console.log(req.body);
res.json({ message: req.body});
res.send("mera page");

    })
    module.exports = router;