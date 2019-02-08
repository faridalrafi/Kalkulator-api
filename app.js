var express = require('express');
var app = express();
//memanggil library
var bodyParser = require('body-parser'); 
//menggunakan library pada express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

calc = require('./kalkulator')
app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.get('/:operator/:a/:b', function(req, res){
   let a = parseInt(req.params.a)
   let b = parseInt(req.params.b)
   let operator = req.params.operator
   let result = calc.kalkulator(a,b,operator)
   res.send(`Hasil operasi ${operator} adalah ${result}`)
})

app.get('/kalkulator', function(req, res){
   let a = parseInt(req.query.a)
   let b = parseInt(req.query.b)
   let operator = req.query.operator
   let result = calc.kalkulator(a,b,operator)
   console.log(req.query)
   res.send(`Hasil operasi ${operator} adalah ${result}`)
})

app.post('/kalkulator', function(req, res){
   let a = parseInt(req.body.a)
   let b = parseInt(req.body.b)
   let operator = req.body.operator
   let result = calc.kalkulator(a,b,operator)
   console.log(req.query)
   res.send(`Hasil operasi ${operator} adalah ${result}`)
})

app.listen(3000);
