let myscore = document.getElementById("myscore").innerHTML;
let compscore = document.getElementById("compscore").innerHTML;
function myfun1(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let rocks = document.getElementById("userimg").src="stone.jpg";

    if(c==0){
        let rock = document.getElementById("compimg").src="stone.jpg";
        if(rocks && rock){
            document.getElementById("result").innerHTML="Match  Draw";
        }  
    }
    if(c==1){
        let paper = document.getElementById("compimg").src="paper.jpg";
        if(rocks && paper){
            document.getElementById("result").innerHTML="Computer Wins";
            compscore++
            document.getElementById("compscore").innerHTML=compscore;

        }  
    }
    if(c==2){
        let scissor = document.getElementById("compimg").src="scissor.jpg";
        if(rocks && scissor){
            document.getElementById("result").innerHTML="User Wins";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;

        }  
    }
}
function myfun2(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let papers = document.getElementById("userimg").src="paper.jpg";
    
    if(c==0){
        let paper = document.getElementById("compimg").src="rock.jpg";
        if(papers && rock){
            document.getElementById("result").innerHTML="User Wins";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;
        }  
    }
    if(c==1){
        let paper = document.getElementById("compimg").src="paper.jpg";
        if(papers && paper){
            document.getElementById("result").innerHTML="Match  Draw";
        }  
    if(c==2){
        let scissor = document.getElementById("compimg").src="scissor.jpg";
        if(papers && scissor){
            document.getElementById("result").innerHTML="Computer Wins";
            compscore++
            document.getElementById("compscore").innerHTML=compscore;

        }  
    }
}
}
    


function myfun3(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let scissors = document.getElementById("userimg").src="scissor.jpg";
    if(c==0){
        let rock = document.getElementById("compimg").src="stone.jpg";
        if(siccors && rock){
            document.getElementById("result").innerHTML="Computer Wins";
            compscore++
            document.getElementById("compscore").innerHTML=compscore;

        }  
    }
    if(c==1){
        let paper = document.getElementById("compimg").src="paper.jpg";
        if(scissors && paper){
            document.getElementById("result").innerHTML="User wins";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;
        }  
    }
    if(c==2){
        let scissor = document.getElementById("compimg").src="scissor.jpg";
        if(scissors && scissor){
            document.getElementById("result").innerHTML="Match Draw";
        }  
    }
}
