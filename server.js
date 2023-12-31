require('dotenv').config();
const path = require("path");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose =require("mongoose");
const {model}= require("./models");
const routes= require("./routes/index");

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('./public')));

mongoose.connect(process.env.MONGO_URL).then(data=>{
    console.log("connected");
}).catch(e=>
    {
        console.log("error connecting to db ", e);
})

app.get('/', async (req, res) => {
    console.log("--- started");
    return res.render('home');
});
app.use("/",routes);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
