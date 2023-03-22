const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

require('dotenv').config()

// importing routes
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/',routes);

global.data = {};

io.on("connection", socket =>{
    console.log("User connected");
    socket.on('fetch',()=>{
        setInterval(() => {
            socket.broadcast.emit("data", data);
        }, 300);
    })
})

http.listen(process.env.PORT,()=> console.log(`app live at port ${process.env.PORT}`))