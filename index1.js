const scissor=document.getElementById('scissor');
const paper=document.getElementById('paper');
const rock=document.getElementById('rock');
const You=document.getElementById('You');
const computer=document.getElementById('computer');
const win=document.getElementById('win');
const lose=document.getElementById('lose');
const draw=document.getElementById('draw');
const end=document.getElementById('end');
const autoPlay=document.getElementById('autoPlay');
let compChoice='';
const score={
 loss:0,
 tie :0,
 won:0
};
console.log(JSON.parse(localStorage.getItem('score')));
function spr(){
    
    let randomNum=Math.round(Math.random()*6)+1;
    if(randomNum===1 || randomNum===5){
     compChoice='scissor';
     computer.textContent='scissor';
    }
    else if(randomNum===2 || randomNum===4){
        compChoice='paper';
        computer.textContent='paper';
    }
    else if(randomNum===3 || randomNum===6){
        compChoice='rock';
        computer.textContent='rock';
    }
}
function choice(playerMove){
    if(playerMove==='scissor'){
        You.textContent=`scissor`;
        if(compChoice==='scissor'){
            score.tie++;
        draw.textContent= score.tie;
        }
        else if(compChoice==='rock'){
            score.loss++;
        lose.textContent= score.loss;
        }
        else if(compChoice==='paper'){
            score.won++;
        win.textContent= score.won;
        };
    }
    else if(playerMove==='rock'){
        You.textContent=`rock`;
        if(compChoice==='rock'){
            score.tie++;
        draw.textContent= score.tie;
        }
        else if(compChoice==='paper'){
            score.loss++;
        lose.textContent= score.loss;
        }
        else if(compChoice==='scissor'){
            score.won++;
        win.textContent= score.won;
        };
    }
    else if(playerMove==='paper'){
        You.textContent=`paper`;
        if(compChoice==='paper'){
            score.tie++;
        draw.textContent= score.tie;
        }
        else if(compChoice==='scissor'){
            score.loss++;
        lose.textContent= score.loss;
        }
        else if(compChoice==='rock'){
            score.won++;
        win.textContent= score.won;
        };
    }

localStorage.setItem('score',JSON.stringify(score));
}
scissor.onclick= function(){
    spr();
choice('scissor');
}
paper.onclick= function(){
    spr();
    choice('paper');
}
rock.onclick= function(){
    spr();
   choice('rock');
}
end.onclick=function(){
    score.tie=0;
    score.won=0;
    score.loss=0;
    computer.textContent='';
    You.textContent='';
    win.textContent=null;
    lose.textContent=null;
    draw.textContent=null;
}
let isAutoPlaying=false;
let intervalid;
autoPlay.onclick=function(){
    if(isAutoPlaying){
        isAutoPlaying=false;
    }
    else{
        isAutoPlaying=true;
    }
    if(isAutoPlaying){
    intervalid=setInterval(function() {
        let a=Math.floor(Math.random()*3)+1;

        if(a===1){
            spr();
            choice('scissor');
        }
        else if(a===2) {
            spr();
            choice('paper');
        } else {
            spr();
            choice('rock');
        }
    }, 3000);
}
else{
    clearInterval(intervalid);

}
}



