const arDrone =require('ar-drone')
const client =  arDrone.createClient()
const path= require('path')
const express = require('express')
const app = express()
const socketio= require('socket.io')


app.set('port',process.env.PORT||3000)
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

const server = app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})

const io=socketio(server)
const listen='listen the'

//DOING
let front = true
let back = true
let right = true
let left = true
let clockwise = true
let counterClockwise= true
//



io.on('connection',(socket)=>{
    console.log('listen')
    socket.on('takeoff',()=>{
        console.log(listen,'takeoff')
        client.takeoff()
    })
    socket.on('land',()=>{
        console.log(listen,'land')
        client.land()
        land=false
    })
    socket.on('stop',()=>{
        console.log(listen,'stop')
        client.stop()
    
    })
    socket.on('front',()=>{
        //if(front){
        console.log(listen,'front')
        client.front(15)
        front=false
    // }else{
    // client.stop()
    // console.log(listen,'stop')
    // front=true
    // }
    })
    socket.on('back',()=>{
       // if(back){
        console.log(listen,'back')
        client.back(15)
        back=false
    // }else{
    // client.stop()
    // console.log(listen,'stop')
    // back=true
    // }
    })
    socket.on('right',()=>{
        console.log(listen,'right')
        client.right(15)
        right=false
    // }else{
    // client.stop()
    // console.log(listen,'stop')
    // right=true
    // }
    })
    socket.on('left',()=>{
        // if(left){
        console.log(listen,'left')
        client.left(15)
        left=false
    // }else{
    // client.stop()
    // console.log(listen,'stop')
    // left=true
    // }
    })
    socket.on('clockwise',()=>{
        // if(clockwise){
        console.log(listen,'clockwise')
        client.clockwise(0.5)
        clockwise=false
    // }else{
    // client.stop()
    // console.log(listen,'stop')
    // clockwise=true
    // }
    })
    socket.on('counterClockwise',()=>{
        // if(counterClockwise){
        console.log(listen,'counterClockwise')
        client.counterClockwise(0.5)
        counterClockwise=false
    // }else{
    //     client.stop()
    //     console.log(listen,'stop')
    //     counterClockwise=true
    // }
    })
})

require("dronestream").listen(3001);

client.getPngStream()
    .on('error', console.log)
    .on('data', function(frame) {
        socket.emit('image', { image: frame });
    });