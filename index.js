const arDrone =require('ar-drone')
const client =  arDrone.createClient()
const path= require('path')
const express = require('express')
const app = express()
const socketio= require('socket.io')

const listen='listen the'

app.set('port',process.env.PORT||3000)
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
const server = app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})

const io=socketio(server)

io.on('connection',(socket)=>{
    console.log('listen')
    socket.on('takeoff',()=>{
        console.log(listen,'takeoff')
        client.takeoff()
    })
    socket.on('land',()=>{
        console.log(listen,'land')
        client.land()
    })
    socket.on('stop',()=>{
        console.log(listen,'stop')
        client.stop()
    })
    socket.on('front',()=>{
        console.log(listen,'front')
        client.front(15)
    })
    socket.on('back',()=>{
        console.log(listen,'back')
        client.back(15)
    })
    socket.on('right',()=>{
        console.log(listen,'right')
        client.right(15)
    })
    socket.on('left',()=>{
        console.log(listen,'left')
        client.left(15)
    })
    socket.on('clockwise',()=>{
        console.log('clockwise')
        client.clockwise(0.5)
    })
    socket.on('counter-clockwise',()=>{
        console.log('counterClockwise')
        client.counterClockwise(0.5)
    })
})