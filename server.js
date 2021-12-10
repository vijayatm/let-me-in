let port = process.env.PORT || 3000;
const express = require('express')
const path = require('path');
const app =  express()

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))


app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})

app.get('/', (req,res)=>{
res.sendFile(__dirname+'/public/views/index.html');
}) 


const wifiPassword = require('wifi-password');



app.get('/wifi', (req,res)=>{
    console.log("the below is pass:")
    try {
        wifiPassword().then(password => {
            console.log(password);
            //=> 'johndoesecretpassword'
            res.send(password);
        });
    } catch (error) {
        console.log(error);
    }
   
    }) 

