

    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext("2d")
    let press=false
    
    
    
    canvas.addEventListener('mousedown',()=>{press=true})
        
    canvas.addEventListener('mousemove',(e)=>{
        if(press){
            canvas.style.cursor= 'none'
        //console.log('x:',e.layerX)
        //console.log('y:',e.layerY)
        function getMousePos(canvas,e){
        return{
            x: e.offsetX,
            y: e.offsetY
        }
    }
        circle = canvas.getContext("2d")
        circle.beginPath()
        circle.lineCap = "round";
        ctx.moveTo(250,0)
        ctx.lineTo(250,500)

        circle.stroke()
       
        let mousePos = getMousePos(canvas,e)
        console.log(mousePos)
        circle.lineWidth = 5
        circle.clearRect(0,0,500,500)
        circle.beginPath()
        circle.fillStyle = "rgba(0,208,0,0.10)"
        circle.arc(mousePos.x,mousePos.y,35,0,Math.PI*2)
        circle.fill()
        circle.beginPath()
        circle.arc(mousePos.x,mousePos.y,15,0,Math.PI*2)
        circle.fillStyle = "rgba(0,208,0,0.4)"
        circle.fill()
        //Optimizar el movimiento, añadir giros
            if(mousePos.x>350){
                todo('right')
            }else if(mousePos.x<150){
                todo('left')
            }else if(mousePos.y>350){
                todo('back')
            }else if(mousePos.y<150){
                todo('front')
            }else{
                todo('stop')
            }
        }
    })
    
    canvas.addEventListener('mouseup',()=>{
        press=false
        todo('stop')    
    })
    
