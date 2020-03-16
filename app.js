let position = 0;
let player1 = 0;
let player2 = 0;
// let ballGo ="down";
// let top= 6;
let tPaddle = document.getElementById("paddle2")
let bPaddle = document.getElementById("paddle1")
// let ball = document.getElementsByClassName("ball")


    addEventListener('keydown', function movePieces (e) {
        if (e.keyCode === 90 && position < -300){
            return;
        }
            else if (e.keyCode === 90) {
                position -= 35;
                tPaddle.style.left = 'calc(320px + ' + position + 'px)'; 
      
        }   
        
        else  if (e.keyCode === 88 && position > 300){
            return;
        }
             else if (e.keyCode === 88){
                position += 35;
                tPaddle.style.left = 'calc(320px + ' + position + 'px)'

        }   
        else if (e.keyCode === 37 && position < -300){
            return;
        }
            else if (e.keyCode === 37){
                position -= 35;
                bPaddle.style.left = 'calc(320px + ' + position + 'px)'
        }
        
        else if (e.keyCode === 39 && position > 300) {
            return;
        }
            else if (e.keyCode === 39){ 
                position += 35;
                bPaddle.style.left = 'calc(320px + ' + position + 'px)'
        }  
    })
        
        let speed;

        window.onload = function() {
            speed = 1.5;
            let posx = 1; 
            let posy = 1;
            let stepx = 1;
            let stepy = 2;
    
            let ball = document.getElementById('ball');
        
        let container = document.getElementById('container');
        let hball = ball.offsetHeight; 
        let wball = ball.offsetWidth;
        let hcont = container.offsetHeight; 
        let wcont = container.offsetWidth;
        
        let timer = setInterval(move, 6); //every 6 millisecond function move is working 

        function move() {
            if(posx >= (wcont-wball) || posx <= 0) {
                stepx *= -1; //reversing it by one so it stays within the border
            }
            if(posy >= (hcont-hball) || posy <= 0) {
                stepy *= -1;
            }
                posx += stepx * speed;
                posy += stepy * speed;
                ball.style.left = posx+"px";
                ball.style.top = posy+ "px";
            
        }
    };
            button.addEventListener("click", pressLeft());

            function plLeft () {
                if (position < -300){
                    return;
            }   else {
                position -= 35;
                tPaddle.style.left = 'calc(320px + ' + position + 'px)'; 
            }    
            }

            function plRight () {
                if (position > 300){
                    return;
            }   else {
                position += 35;
                tPaddle.style.left = 'calc(320px + ' + position + 'px)'; 
            }    
            }

            function pl2Left () {
                if (position < -300){
                    return;
            }   else {
                position -= 35;
                bPaddle.style.left = 'calc(320px + ' + position + 'px)'; 
            }    
            }

            function pl2Right () {
                if (position > 300){
                    return;
            }   else {
                position += 35;
                bPaddle.style.left = 'calc(320px + ' + position + 'px)'; 
            }    
            }
        
            button.addEventListener("click", restartB())
            
            function restartB (){
                location.reload()
            }
         
            
         //Need a function for scoring,     
        //need two functions for scoring for each player 


        // function scoring1 (){
        //     if (){
        //         player1++
        //     }
        //     document.getElementByClassName("score1").innerHTML =player1;
        // }

        // function scoring2 (){
        //     if (){    
        //         player2++
        //     }
        //     document.getElementByClassName("score2").innerHTML =player2;
        // }
        
        // function gameWon (){
        //     if (player1 == 10){
        //         alert("Player 1 wins") //will show alert box but not actually end game
        //     }
        // }   else if (player2 == 10) {
        //         alert("Player 2 wins")
        // }


        
            // document.getElementById("button4").addEventListener("click", pressRight());

        // function leftPaddle(){
        //     if (parseInt(paddle1.css('left')) > 0) {
        //         (parseInt(paddle1.css('left')) - 125);
        //     }
        // }

        // function pressDown() {
        //     document.getElementById("button1").innerHTML = tPaddle.style.left = 'calc(320px + ' + position + 'px)' ;
        //   }
    
        //   let pressDown = () => {
        //     // capture the entered values of two input boxes
        //     let firstPlaya = document.getElementById("button1");{
                
        //     }
        //     let secPlaya = document.getElementById("button2");
        //   }
        // let gameOver = false;
    

        // anim_id = requestAnimationFrame(repeat);
        //   function repeat() {
        //       if (ballGo === "down"){
        //           ballDown();
        //       } else {
        //           ballUp();
        //       }
        //     anim_id = requestAnimationFrame(repeat);
        //     }

        //     function ballDown(){
        //         ball.css('top',parseInt(ball.css('top')) + top);
        //     }








// // alert("A DOM game");
// // // Game objects
// // let player1 = {
// // 	speed: 0, // movement in pixels per second
// // 	x: 0,
// // 	y: 0
// // };
// // let player2 = {
// // 	x: 0,
// // 	y: 0
// // };
// // let ball = { 
// // speed: 0 // movement in pixels per second
// // 	x: 0,
// // 	y: 0
// // };

// let tPaddle = document.getElementById("paddle1")
// let bPaddle = document.getElementById("paddle2")
// let ball = document.getElementsByClassName("ball")

// addEventListener("keypress", function movePieces (e) {
//     if (e.keyCode === 37) {
//         tPaddle.style.left = "calc(500px + 50px)"
//     }
// })

// //Key code for controlls:
// //Arrow Left 37
// //Arrow Right 39
// //Z button 90
// //X button 88
// // // Handle keyboard controls
// // let keysDown = {};

// // addEventListener("keyleft", function (e) {
// // 	keysDown[e.keyCode] = true;
// // }, false);

// // addEventListener("keyright", function (e) {
// // 	delete keysDown[e.keyCode];
// // }, false);

// // // Reset the game when the player doesnt block the shot. Need one for each player
// // let reset = function () {

// //}

// // want to move paddle left when pressing z
// // jquery .onkeypress -> move left 
// // 
// // let paddle = document.getElementById("paddle2");
// // on keypress you want to do something 

// // examples of how to put functions in event listeners
// // Example 1:
// // paddle.addEventListener("keypress", () => {
// // 
// // })
// // Example 2:
// // paddle.addEventListener("keypress", function () {

// // })
// // Example 3:
// // function doSomething() {

// // }
// // paddle.addEventListener("keypress", doSomething)
        
// // paddle.addEventListener("keypress", () =>{
// //     console.log("help")
// // })

// // $(document).ready(function() {
// //     body.bind
// // })