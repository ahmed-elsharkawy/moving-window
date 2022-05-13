let myWin = window.open("", "", "left=0,top=0,width=300,height=200");
let x = myWin.screenX;
let y = myWin.screenY;


moveForward()

    function moveForward(){
        let forward = window.setInterval(() => {
            if(x != 530){
                myWin.moveBy(1, 1);
                x += 1;
            }else{
                window.clearInterval(forward);
                moveBackward();   
            }
        }, 10)
    }

    function moveBackward(){
        let backward = window.setInterval(() => {
            if(x != 0){
                myWin.moveBy(-1, -1);
                x -= 1;
            }else{
                window.clearInterval(backward);
                moveForward();
            }
        }, 10)
    }