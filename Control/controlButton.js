let onland=true
        
        function todo(action){
            console.log(action)
            socket.emit(action)
        }

        window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Down": // IE/Edge specific value
    todo('back')
    case "ArrowDown":
    todo('back')
      break;
    case "Up": // IE/Edge specific value
    todo('front')
    case "ArrowUp":
    todo('front')
      break;
    case "Left": // IE/Edge specific value
    todo('left')
    case "ArrowLeft":
    todo('left')
      break;
    case "Right": // IE/Edge specific value
    todo('right')
    case "ArrowRight":
    todo('right')
      break;
    case "q":
    todo('clockwise')
    break
    case "e":
    todo('counterClockwise')
    break
    case "Enter":
        if(onland){
            
    todo('takeoff')
    onland=false
}else{
    todo('land')
    onland=true
}
      break;
    case "Esc": // IE/Edge specific value
    todo('land')
    case "Escape":
    
    todo('land')
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
        })

window.addEventListener("keyup", (event)=>{
    let includeKeys=["Escape","Enter"]
    if(!includeKeys.includes(event.key)){
    socket.emit('stop')
    }
})



    let socket=io()
    function takeoff(){
        todo('takeoff')
    }
    function land(){
        todo('land')
    }
    function stop(){
        todo('stop')
    }
    function front(){
        todo('front')
    }
    function back(){
        todo('back')
    }
    function right(){
        todo('right')
    }
    function left(){
        todo('left')
    }
    function clockwise(){
        todo('clockwise')
    }
    function counterClockwise(){
        todo('counterClockwise')
    }
    

    document.getElementById('front').onclick= front
    document.getElementById('back').onclick= back
    document.getElementById('right').onclick= right
    document.getElementById('left').onclick= left
    document.getElementById('takeoff').onclick = takeoff
    document.getElementById('land').onclick= land
    document.getElementById('stop').onclick= stop
    document.getElementById('clockwise').onclick= clockwise
    document.getElementById('counterClockwise').onclick= counterClockwise
