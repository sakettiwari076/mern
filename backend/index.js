const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const { Router } = require('express');
//DB


dotenv.config({path: './config.env'});
// const PORT =process.env.PORT ;

require('./db/conn');
// const aboutroute=app.use(require('./router/auth'))
// link router folders
//dikado json
app.use(express.json());

 app.use(require('./router/auth'));





app.get('/', (req, res )=> {
    res.send('HELLO WORLD')
    }
    );


 



app.get('/about', (req, res )=> {
    res.send('HELLO abt WORLD')
    }
    );


    app.get('/contact', (req, res )=> {
        res.send('HELLO contact WORLD')
        }
        );


        app.get('/signin', (req, res )=> {
            res.send('HELLO signin WORLD')
            }
            );




            app.get('/signup', (req, res )=> {
                res.send('HELLO  signup  WORLD')
                }
                );


app.listen(3000 , () => {

    console.log('server running 3000')
})


console.log('YE TO NEECHE HI PRINT HO APNE SAHULIAT SE')