const app = require('express')();

app.get('/health',(req,res)=>{
    res.send("App is live and running fine!");
});

app.get('/:temp/:ecg/:heartrate/:spo',(req,res)=>{
    console.log(req.query);
    data = req.query;
    res.send("1");
});

app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
module.exports = app;
// :temp/:ecg/:heartrate/:spo
