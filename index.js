const express = require('express');
const mongoose = require('mongoose');
const app = express();
routes = require('./routes/route')

//middleware
app.use(express.static('public'))
app.use(express.json())
mongoose.set("strictQuery", false);
Owner = require('./js.doc/owners')
app.set('view engine', 'ejs')

//connect til databasen og koble seg til
const dbURI = 'mongodb+srv://reignchad69:fakoff@cluster0.jeyvooj.mongodb.net/eksamen-Reign'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err)=> console.log(err))

app.get('/',(req,res)=>{
    res.render('owner')
})
app.use(routes);