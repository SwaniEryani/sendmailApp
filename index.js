const express= require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express ();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
const PORT= 5000;



app.post('/api/sendMail', (req, res)=>{
  console.log(req.body);

})


app.listen(PORT, () =>{
  console.log("Server Running at ",PORT);
})