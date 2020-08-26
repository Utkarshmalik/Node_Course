const express = require('express');
const morgan = require('morgan');
const app = express();



app.use(morgan("dev"));


app.get('/',(req,res)=>
{
    res.send("hello");
})

app.use((req, res) => {
    console.log('cdcd');
  });
  

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000))