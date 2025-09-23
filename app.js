let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;

h2=document.querySelector("h2");
let btn=["red","blue","yellow","green"];

let button=document.querySelector(".button");

button.addEventListener("click",function(){
    if(started==false){
    console.log("game started.");
    started=true;
    levelUp();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
};
function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
};
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    
     let randidx=Math.floor(Math.random()*btn.length);
     let randcolor=btn[randidx];
     let randbtn=document.querySelector(`.${randcolor}`);
    //  console.log(`randam index=${randidx}, random color=${randcolor}`);
    //  console.dir(`random button =${randbtn}`);

    gameSeq.push(randcolor);
    console.log(gameSeq);
     
    btnflash(randbtn);
    userSeq=[];
};
function checkans(idx){
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx]){
        // console.log("same value");
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game is over. and your score is <b>${level}</b>.<br> press start button to restart!`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userbtnflash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);
    checkans(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");

for(btns of allbtn){
    btns.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
