alert("She don't work. YET!");


let position = 0;
let ballGo;
let player1 = 0;
let player2 = 0;
let tPaddle = document.getElementById("paddle2")
let bPaddle = document.getElementById("paddle1")



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
        //gets ball to move onload but maybe that's why it's not working with C.D.?
        let speed;
        window.onload = function() {
            speed = 1;
            let xpos = 2; 
            let ypos = 2;
            let stepx = 2;
            let stepy = 2;
    
        let ball = document.getElementById('ball');
        
        let container = document.getElementById('container');
        let hcont = container.offsetHeight; 
        let wcont = container.offsetWidth;
        let hball = ball.offsetHeight; 
        let wball = ball.offsetWidth;
        
        let timer = setInterval(movement, 7); //every 6 millisecond function movement is working 

        function movement() {
            if(xpos >= (wcont-wball) || xpos <= 0) {
                stepx *= -1; //reversing it by one so it stays within the border
            }
            if(ypos >= (hcont-hball) || ypos <= 0) {
                stepy *= -1; //reversing it by one so it stays within the border
            }
                xpos += stepx * speed;
                ypos += stepy * speed;
                ball.style.left = xpos+"px";
                ball.style.top = ypos+ "px";
            
            }
        };

        //function for collision detection that isn't working 
        function collision($div1, $div2) {
            let x1 = $div1.offset().left;
            let y1 = $div1.offset().top;
            let h1 = $div1.outerHeight(true);
            let w1 = $div1.outerWidth(true);
            let b1 = y1 + h1;
            let r1 = x1 + w1;
            let x2 = $div2.offset().left;
            let y2 = $div2.offset().top;
            let h2 = $div2.outerHeight(true);
            let w2 = $div2.outerWidth(true);
            let b2 = y2 + h2;
            let r2 = x2 + w2;
    
            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }
        
        
            function many () {
                if (collision(ball, tPaddle)) {
                    ballGo = "down";
                //console.log(collision)
                }   else if (collision(ball, bPaddle)) {
                    ballGo = "up";
                }
                if (ballGo === "down") {
                    ballDown();
                } else {
                    ballUp();
                }
        };

            function ballDown () {
                ball.css("top", parseInt(ball.css("top")) + top);
            }
            
            function ballUp () {
                ball.css("top", parseInt(ball.css("top")) - top);
            }

            

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