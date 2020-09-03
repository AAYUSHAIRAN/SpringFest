var canvas = document.querySelector("#canvas");
var c= canvas.getContext('2d');
var i=0, p5;

c.font = "12px Georgia";
c.fillStyle="yellow";
c.fillText("START",25, 14)

c.font = "12px Georgia";
c.fillStyle="yellow";
c.fillText("END",30, 114);

c.font = "12px Georgia";
c.fillStyle="yellow";
c.fillText("START",725,714);

c.font = "12px Georgia";
c.fillStyle="yellow";
c.fillText("END",730, 614);

c.font = "14px sans-serif";
c.fillStyle="white";
c.fillText("PLAYER:1",220,350);

c.font = "14px sans-serif";
c.fillStyle="white";
c.fillText("PLAYER:2",520,350);

c.font = "14px sans-serif";
c.fillStyle="white";
c.fillText("player-1(completed)",190,550);

c.font = "14px sans-serif";
c.fillStyle="white";
c.fillText("player-2(completed)",490,550);


c.font = "30px sans-serif";
c.fillStyle="white";
c.fillText("LUDO-LITE",320,200);

c.beginPath();
c.moveTo(150,330);
c.lineTo(350,330);
c.lineTo(350,450);
c.lineTo(150,450);
c.lineTo(150,330);
c.strokeStyle="white";
c.stroke();

c.beginPath();
c.moveTo(450,330);
c.lineTo(650,330);
c.lineTo(650,450);
c.lineTo(450,450);
c.lineTo(450,330);
c.strokeStyle="white";
c.stroke();

c.beginPath();
c.moveTo(450,530);
c.lineTo(650,530);
c.lineTo(650,650);
c.lineTo(450,650);
c.lineTo(450,530);
c.strokeStyle="white";
c.stroke();

c.beginPath();
c.moveTo(150,530);
c.lineTo(350,530);
c.lineTo(350,650);
c.lineTo(150,650);
c.lineTo(150,530);
c.strokeStyle="white";
c.stroke();

for(i=0; i<28 ; ++i)
{
    
    c.fillStyle="rgba(255,0,0,0.5";
    c.strokeStyle="black";
    if(i<8)
    {
        c.fillRect( 0 + 100*i, 0, 100, 100);
        c.strokeRect( 0 + 100*i, 0, 100, 100);
    }
    else if(i<15)
    {
        c.fillRect( 100*7, 100*(i-7), 100, 100);
        c.strokeRect( 100*7, 100*(i-7), 100, 100);
    }
    else if(i< 22)
    {
        c.fillRect( 100*7-100*(i-14), 100*7, 100, 100);
        c.strokeRect( 100*7-100*(i-14), 100*7, 100, 100);
    }
    else
    {
        c.fillRect( 0, 100*7- 100*(i-21), 100, 100);
        c.strokeRect( 0, 100*7- 100*(i-21), 100, 100);
    }
}

function Player(player_no,token_no)
{
    this.x=0;
    this.y=0;
    this.start=0;
    this.completed=0;
    this.playerNum= player_no;
    this.tokenNum= token_no;
};


p1= new Player(1,1);
p2= new Player(1,2);
p3= new Player(2,1);
p4= new Player(2,2);

var a1=0, x=0,a2=0,i=0,b1,b2,c1,c2;


p1.x=200;
p1.y=400;
p2.x=300;
p2.y=400;
p3.x= 500;
p3.y=400;
p4.x= 600;
p4.y=400;

var i=0;

//drawing the tokens in the middle
for(i=0;i<4;++i)
{
    var a,b,d,e;
    if(i==0)
    {
        a=p1.x;
        b=p1.y;
        d=p1.playerNum;
        e=p1.tokenNum;
    }
    else if(i==1)
    {
        a=p2.x;
        b=p2.y;
        d=p2.playerNum;
        e=p2.tokenNum;
    }
    else if(i==2)
    {
        a=p3.x;
        b=p3.y;
        d=p3.playerNum;
        e=p3.tokenNum;
    }
    else
    {
        a=p4.x;
        b=p4.y;
        d=p4.playerNum;
        e=p4.tokenNum;
    }

    c.beginPath();
    c.arc(a, b, 30, Math.PI*0, Math.PI *2, true);
    if(d==1)
    {
        if(e==1)
        {
            c.strokeStyle='rgb(252, 244, 3)';
            c.fillStyle='rgb(252, 244, 3)';
        }

        else
        {
            c.strokeStyle='rgb(252, 250, 169)';
            c.fillStyle='rgb(252, 250, 169)';   
        }
    }
    else
    {
        if(e==1)
        {
            c.strokeStyle='rgb(5, 34, 252)';
            c.fillStyle='rgb(5, 34, 252)';
        }
        else
        {
            c.strokeStyle='rgb(143, 156, 247)';
            c.fillStyle='rgb(143, 156, 247)';
        }
    }
    c.fill();
    c.stroke();
}


b1= document.getElementById("token11");
b2= document.getElementById("token12");
c1= document.getElementById("token21");
c2= document.getElementById("token22");
b1.style.display="none";
b2.style.display="none";
c1.style.display="none";
c2.style.display="none";
var roll= document.querySelector("#main button");
roll.onclick = function(){

    x = Math.floor(Math.random() * 6) + 1; 
    console.log("value on roll:",x);
    roll.nextElementSibling.textContent ="value on roll is: " + x;
    roll.style.display= "none";
    if(i%2==0)
    {
        if(a1==0 && x==6)
        {
            b1.style.display="initial";
            b2.style.display="initial";
            b1.onclick= function(){
                b1.style.display="none";
                b2.style.display="none";
                c.clearRect(p1.x-31, p1.y-31, 62, 62);
                c.fillStyle="black";
                c.fillRect(p1.x-31, p1.y-31, 62,62);
                p1.x=50;
                p1.y=50;
                if(p3.x==p1.x && p3.y==p1.y)
                {
                    p3.start=0;
                    p3.x=500;
                    p3.y=400;
                    c.beginPath();
                    c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                    a2=a2-1;
                }
                if(p4.x==p1.x && p4.y==p1.y)
                {
                    p4.start=0;
                    p4.x=600;
                    p4.y=400;
                    c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    a2=a2-1;
                }
                c.beginPath();
                c.arc(p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                c.strokeStyle='rgb(252, 244, 3)';
                c.fillStyle='rgb(252, 244, 3)';
                c.fill();
                c.stroke();
                p1.start=1;
                roll.style.display="initial";
                a1=1;
            };
            b2.onclick= function(){
                b1.style.display="none";
                b2.style.display="none";
                c.clearRect(p2.x-31, p2.y-31, 62, 62);
                c.fillStyle="black";
                c.fillRect(p2.x-31, p2.y-31, 62,62);
                p2.x=50;
                p2.y=50;
                if(p3.x==p2.x && p3.y==p2.y)
                {
                    p3.start=0;
                    p3.x=500;
                    p3.y=400;
                    c.beginPath();
                    c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                    a2=a2-1;
                }
                if(p4.x==p2.x && p4.y==p2.y)
                {
                    p4.start=0;
                    p4.x=600;
                    p4.y=400;
                    c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    a2=a2-1;
                }
                c.beginPath();
                c.arc(p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                c.strokeStyle='rgb(252, 250, 169)';
                c.fillStyle='rgb(252, 250, 169)';   
                c.fill();
                c.stroke();
                p2.start=1;
                roll.style.display="initial";
                a1=1;
            };
        }
        else if(a1==0 && x!=6)
        {
            roll.nextElementSibling.innerHTML +="<br /> can't move";
            roll.style.display="initial";
        }
        else if(a1==1)
        {
            if(x!=6)
            {
                if((p1.start==1)&& (p1.completed==0))
                {
                    //drawing function to take of clearect;
                    c.clearRect(p1.x-31, p1.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p1.x-31, p1.y-31, 62,62);
                    if(p1.y == 50)
                    {
                        p1.x += 100*x;
                        if(p1.x > 750)
                        {
                            p1.y  += p1.x - 750;
                            p1.x= 750;
                        }
                    }
                    else if(p1.x==750)
                    {
                        p1.y += 100*x;
                        if(p1.y > 750)
                        {
                            p1.x= p1.x - (p1.y-750);
                            p1.y=750;
                        }
                    }
                    else if(p1.y==750)
                    {
                        p1.x = p1.x - 100*x;
                        if(p1.x < 50)
                        {
                            p1.y=p1.y-(50 - p1.x);
                            p1.x = 50;
                        }
                    }
                    else if(p1.x==50)
                    {
                        p1.y=p1.y-100*x;
                        if(p1.y==150)
                        {
                            p1.x=200;
                            p1.y=600;
                            p1.completed=1;
                        }
                        else if(p1.y<150)
                        {
                            p1.y=p1.y+100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    if(p1.y==150 && p1.x==50)
                    {
                        p1.x=200;
                        p1.y=600;
                        p1.completed=1;
                    }

                    if(p3.x==p1.x && p3.y==p1.y)
                    {
                        p3.start=0;
                        p3.x=500;
                        p3.y=400;
                        c.beginPath();
                        c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(5, 34, 252)';
                        c.fillStyle='rgb(5, 34, 252)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    if(p4.x==p1.x && p4.y==p1.y)
                    {
                        p4.start=0;
                        p4.x=600;
                        p4.y=400;
                        c.beginPath();
                        c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(143, 156, 247)';
                        c.fillStyle='rgb(143, 156, 247)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)'; 
                    c.fill();
                    c.stroke();
                }
                else if((p2.start==1)&&(p2.completed==0))
                {
                    //drawing function to take of clearect;
                    c.clearRect(p2.x-31, p2.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p2.x-31, p2.y-31, 62,62);
                    if(p2.y == 50)
                    {
                        p2.x += 100*x;
                        if(p2.x > 750)
                        {
                            p2.y  += p2.x - 750;
                            p2.x= 750;
                        }
                    }
                    else if(p2.x==750)
                    {
                        p2.y += 100*x;
                        if(p2.y > 750)
                        {
                            p2.x= p2.x - (p2.y-750);
                            p2.y=750;
                        }
                    }
                    else if(p2.y==750)
                    {
                        p2.x = p2.x - 100*x;
                        if(p2.x < 50)
                        {
                            p2.y=p2.y-(50 - p2.x);
                            p2.x = 50;
                        }
                    }
                    else if(p2.x==50)
                    {
                        p2.y=p2.y-100*x;
                        if(p2.y==150)
                        {
                            p2.x=300;
                            p2.y=600;
                            p2.completed=1;
                        }
                        else if(p2.y<150)
                        {
                            p2.y=p2.y+100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    if(p2.y==150 && p2.x==50)
                    {
                        p2.x=200;
                        p2.y=600;
                        p2.completed=1;
                    }

                    if(p3.x==p2.x && p3.y==p2.y)
                    {
                        p3.start=0;
                        p3.x=500;
                        p3.y=400;
                        c.beginPath();
                        c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(5, 34, 252)';
                        c.fillStyle='rgb(5, 34, 252)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    if(p4.x==p2.x && p4.y==p2.y)
                    {
                        p4.start=0;
                        p4.x=600;
                        p4.y=400;
                        c.beginPath();
                        c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(143, 156, 247)';
                        c.fillStyle='rgb(143, 156, 247)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)'; 
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                }
                else
                roll.nextElementSibling.innerHTML +="<br /> can't move";
                roll.style.display="initial";
            }

            else
            {
                if(p1.completed==0)
                {
                    b1.style.display="initial";
                    b1.onclick = function(){
                        b1.style.display="none";
                        b2.style.display="none";
                        if((p1.start==1))
                        {
                            c.clearRect(p1.x-31, p1.y-31, 62, 62);
                            c.fillStyle="rgba(255,0,0,0.5";
                            c.fillRect(p1.x-31, p1.y-31, 62,62);
                            if(p1.y == 50)
                            {
                                p1.x += 100*x;
                                if(p1.x > 750)
                                {
                                    p1.y  += p1.x - 750;
                                    p1.x= 750;
                                }
                            }
                            else if(p1.x==750)
                            {
                                p1.y += 100*x;
                                if(p1.y > 750)
                                {
                                    p1.x= p1.x - (p1.y-750);
                                    p1.y=750;
                                }
                            }
                            else if(p1.y==750)
                            {
                                p1.x = p1.x - 100*x;
                                if(p1.x < 50)
                                {
                                    p1.y=p1.y-(50 - p1.x);
                                    p1.x = 50;
                                }
                            }
                            else if(p1.x==50)
                            {
                                p1.y=p1.y-100*x;
                                if(p1.y==150)
                                {
                                    p1.x=200;
                                    p1.y=600;
                                    p1.completed=1;
                                }
                                else if(p1.y<150)
                                {
                                    p1.y=p1.y+100*x;
                                    roll.nextElementSibling.innerHTML +="<br /> can't move";
                                } 
                            }
                            if(p1.y==150 && p1.x==50)
                            {
                                p1.x=200;
                                p1.y=600;
                                p1.completed=1;
                            }
                            if(p3.x==p1.x && p3.y==p1.y)
                            {
                                p3.start=0;
                                p3.x=500;
                                p3.y=400;
                                c.beginPath();
                                c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(5, 34, 252)';
                                c.fillStyle='rgb(5, 34, 252)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            if(p4.x==p1.x && p4.y==p1.y)
                            {
                                p4.start=0;
                                p4.x=600;
                                p4.y=400;
                                c.beginPath();
                                c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(143, 156, 247)';
                                c.fillStyle='rgb(143, 156, 247)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            c.beginPath();
                            c.arc( p1.x, p1.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(252, 244, 3)';
                            c.fillStyle='rgb(252, 244, 3)';
                            c.fill();
                            c.stroke();
                            c.beginPath();
                            c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(252, 250, 169)';
                            c.fillStyle='rgb(252, 250, 169)'; 
                            c.fill();
                            c.stroke();
                        }
                        else
                        {
                            c.clearRect(p1.x-31, p1.y-31, 62, 62);
                            c.fillStyle="black";
                            c.fillRect(p1.x-31, p1.y-31, 62,62);
                            p1.x=50;
                            p1.y=50;
                            if(p3.x==p1.x && p3.y==p1.y)
                            {
                                p3.start=0;
                                p3.x=500;
                                p3.y=400;
                                c.beginPath();
                                c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(5, 34, 252)';
                                c.fillStyle='rgb(5, 34, 252)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            if(p4.x==p1.x && p4.y==p1.y)
                            {
                                p4.start=0;
                                p4.x=600;
                                p4.y=400;
                                c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(143, 156, 247)';
                                c.fillStyle='rgb(143, 156, 247)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            c.beginPath();
                            c.arc(p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(252, 244, 3)';
                            c.fillStyle='rgb(252, 244, 3)';
                            c.fill();
                            c.stroke();
                            p1.start=1;
                            a1=2;
                        }
                        roll.style.display="initial";
                    };
                }
                
                if(p2.completed==0)
                {
                    b2.style.display="initial";
                    b2.onclick= function(){
                        b1.style.display="none";
                        b2.style.display="none";
                        if((p2.start==1)&&(p2.completed==0))
                        {
                            c.clearRect(p2.x-31, p2.y-31, 62, 62);
                            c.fillStyle="rgba(255,0,0,0.5";
                            c.fillRect(p2.x-31, p2.y-31, 62,62);
                            if(p2.y == 50)
                            {
                                p2.x += 100*x;
                                if(p2.x > 750)
                                {
                                    p2.y  += p2.x - 750;
                                    p2.x= 750;
                                }
                            }
                            else if(p2.x==750)
                            {
                                p2.y += 100*x;
                                if(p2.y > 750)
                                {
                                    p2.x= p2.x - (p2.y-750);
                                    p2.y=750;
                                }
                            }
                            else if(p2.y==750)
                            {
                                p2.x = p2.x - 100*x;
                                if(p2.x < 50)
                                {
                                    p2.y=p2.y-(50 - p2.x);
                                    p2.x = 50;
                                }
                            }
                            else if(p2.x==50)
                            {
                                p2.y=p2.y-100*x;
                                if(p2.y==150)
                                {
                                    p2.x=300;
                                    p2.y=600;
                                    p2.completed=1;
                                }
                                else if(p2.y<150)
                                {
                                    p2.y=p2.y+100*x;
                                    roll.nextElementSibling.innerHTML +="<br /> can't move";
                                }
                            }
                            if(p2.y==150 && p2.x==50)
                            {
                                p2.x=300;
                                p2.y=600;
                                p2.completed=1;
                            }

                            if(p3.x==p2.x && p3.y==p2.y)
                            {
                                p3.start=0;
                                p3.x=500;
                                p3.y=400;
                                c.beginPath();
                                c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(5, 34, 252)';
                                c.fillStyle='rgb(5, 34, 252)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            if(p4.x==p2.x && p4.y==p2.y)
                            {
                                p4.start=0;
                                p4.x=600;
                                p4.y=400;
                                c.beginPath();
                                c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(143, 156, 247)';
                                c.fillStyle='rgb(143, 156, 247)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            c.beginPath();
                            c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(252, 250, 169)';
                            c.fillStyle='rgb(252, 250, 169)'; 
                            c.fill();
                            c.stroke();
                            c.beginPath();
                            c.arc(p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(252, 244, 3)';
                            c.fillStyle='rgb(252, 244, 3)';
                            c.fill();
                            c.stroke();
                            
                        }
                        else if(p2.start==0)
                        {
                            c.clearRect(p2.x-31, p2.y-31, 62, 62);
                            c.fillStyle="black";
                            c.fillRect(p2.x-31, p2.y-31, 62,62);
                            p2.x=50;
                            p2.y=50;
                            if(p3.x==p2.x && p3.y==p2.y)
                            {
                                p3.start=0;
                                p3.x=500;
                                p3.y=400;
                                c.beginPath();
                                c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(5, 34, 252)';
                                c.fillStyle='rgb(5, 34, 252)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            if(p4.x==p2.x && p4.y==p2.y)
                            {
                                p4.start=0;
                                p4.x=600;
                                p4.y=400;
                                c.beginPath();
                                c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(143, 156, 247)';
                                c.fillStyle='rgb(143, 156, 247)';
                                c.fill();
                                c.stroke();
                                a2=a2-1;
                            }
                            c.beginPath();
                            c.arc(p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(252, 250, 169)';
                            c.fillStyle='rgb(252, 250, 169)';   
                            c.fill();
                            c.stroke();
                            p2.start=1;
                            a1=2;
                        }
                        roll.style.display="initial"; 
                    };
                }
            }
        }
        else if(a1==2)
        {
            if(p1.completed==0)
            {
                b1.style.display="initial";
                b1.onclick = function(){
                    b1.style.display="none";
                    b2.style.display="none";
                    c.clearRect(p1.x-31, p1.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p1.x-31, p1.y-31, 62,62);
                    if(p1.y == 50)
                    {
                        p1.x += 100*x;
                        if(p1.x > 750)
                        {
                            p1.y  += p1.x - 750;
                            p1.x= 750;
                        }
                    }
                    else if(p1.x==750)
                    {
                        p1.y += 100*x;
                        if(p1.y > 750)
                        {
                            p1.x= p1.x - (p1.y-750);
                            p1.y=750;
                        }
                    }
                    else if(p1.y==750)
                    {
                        p1.x = p1.x - 100*x;
                        if(p1.x < 50)
                        {
                            p1.y=p1.y-(50 - p1.x);
                            p1.x = 50;
                        }
                    }
                    else if(p1.x==50)
                    {
                        p1.y=p1.y-100*x;
                        if(p1.y==150)
                        {
                            p1.x=200;
                            p1.y=600;
                            p1.completed=1;
                        }
                        else if(p1.y<150)
                        {
                            p1.y=p1.y+100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    if(p1.y==150 && p1.x==50)
                    {
                        p1.x=200;
                        p1.y=600;
                        p1.completed=1;
                    }
                    if(p3.x==p1.x && p3.y==p1.y)
                    {
                        p3.start=0;
                        p3.x=500;
                        p3.y=400;
                        c.beginPath();
                        c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(5, 34, 252)';
                        c.fillStyle='rgb(5, 34, 252)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    if(p4.x==p1.x && p4.y==p1.y)
                    {
                        p4.start=0;
                        p4.x=600;
                        p4.y=400;
                        c.beginPath();
                        c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(143, 156, 247)';
                        c.fillStyle='rgb(143, 156, 247)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                    roll.style.display="initial";
                    if(p1.completed==1 && p2.completed==1)
                    alert("player:1 wins");
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)'; 
                    c.fill();
                    c.stroke(); 
                };
            }

            if(p2.completed==0)
            {
                b2.style.display="initial";
                b2.onclick = function(){
                    b1.style.display="none";
                    b2.style.display="none";
                    c.clearRect(p2.x-31, p2.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p2.x-31, p2.y-31, 62,62);
                    if(p2.y == 50)
                    {
                        p2.x += 100*x;
                        if(p2.x > 750)
                        {
                            p2.y  += p2.x - 750;
                            p2.x= 750;
                        }
                    }
                    else if(p2.x==750)
                    {
                        p2.y += 100*x;
                        if(p2.y > 750)
                        {
                            p2.x= p2.x - (p2.y-750);
                            p2.y=750;
                        }
                    }
                    else if(p2.y==750)
                    {
                        p2.x = p2.x - 100*x;
                        if(p2.x < 50)
                        {
                            p2.y=p2.y-(50 - p2.x);
                            p2.x = 50;
                        }
                    }
                    else if(p2.x==50)
                    {
                        p2.y=p2.y-100*x;
                        if(p2.y==150)
                        {
                            p2.x=300;
                            p2.y=600;
                            p2.completed=1;
                        }
                        else if(p2.y<150)
                        {
                            p2.y=p2.y+100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    if(p2.y==150 && p2.x==50)
                    {
                        p2.x=300;
                        p2.y=600;
                        p2.completed=1;
                    }
                    if(p3.x==p2.x && p3.y==p2.y)
                    {
                        p3.start=0;
                        p3.x=500;
                        p3.y=400;
                        c.beginPath();
                        c.arc( p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(5, 34, 252)';
                        c.fillStyle='rgb(5, 34, 252)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    if(p4.x==p2.x && p4.y==p2.y)
                    {
                        p4.start=0;
                        p4.x=600;
                        p4.y=400;
                        c.beginPath();
                        c.arc( p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(143, 156, 247)';
                        c.fillStyle='rgb(143, 156, 247)';
                        c.fill();
                        c.stroke();
                        a2=a2-1;
                    }
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)'; 
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                    roll.style.display="initial";
                    if(p1.completed==1 && p2.completed==1)
                    alert("player:1 wins"); 
                };
            }
        }
        i=i+1;
        roll.nextElementSibling.innerHTML +="<br />next, player-2 turn";
    }
    else
    {
        if(a2==0 && x==6)
        {
            c1.style.display="initial";
            c2.style.display="initial";
            c1.onclick= function(){
                c1.style.display="none";
                c2.style.display="none";
                c.clearRect(p3.x-31, p3.y-31, 62, 62);
                c.fillStyle="black";
                c.fillRect(p3.x-31, p3.y-31, 62,62);
                p3.x=750;
                p3.y=750;
                if(p3.x==p1.x && p3.y==p1.y)
                {
                    p1.start=0;
                    p1.x=200;
                    p1.y=400;
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                    a1=a1-1;
                }
                if(p3.x==p2.x && p3.y==p2.y)
                {
                    p2.start=0;
                    p2.x=300;
                    p2.y=400;
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)';
                    c.fill();
                    c.stroke();
                    a1=a1-1;
                }
                c.beginPath();
                c.arc(p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                c.strokeStyle='rgb(5, 34, 252)';
                c.fillStyle='rgb(5, 34, 252)';
                c.fill();
                c.stroke();
                p3.start=1;
                roll.style.display="initial";
                a2=1;
            };
            c2.onclick= function(){
                c1.style.display="none";
                c2.style.display="none";
                c.clearRect(p4.x-31, p4.y-31, 62, 62);
                c.fillStyle="black";
                c.fillRect(p4.x-31, p4.y-31, 62,62);
                p4.x=750;
                p4.y=750;
                if(p4.x==p1.x && p4.y==p1.y)
                {
                    p1.start=0;
                    p1.x=200;
                    p1.y=400;
                    c.beginPath();
                    c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(252, 244, 3)';
                    c.fillStyle='rgb(252, 244, 3)';
                    c.fill();
                    c.stroke();
                    a1=a1-1;
                }
                if(p4.x==p2.x && p4.y==p2.y)
                {
                    p2.start=0;
                    p2.x=300;
                    p2.y=400;
                    c.beginPath();
                    c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(252, 250, 169)';
                    c.fillStyle='rgb(252, 250, 169)';
                    c.fill();
                    c.stroke();
                    a1=a1-1;
                }
                c.beginPath();
                c.arc(p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                c.strokeStyle='rgb(143, 156, 247)';
                c.fillStyle='rgb(143, 156, 247)';
                c.fill();
                c.stroke();
                p2.start=1;
                roll.style.display="initial";
                a2=1;
            };
        }
        else if(a2==0 && x!=6)
        {
            roll.nextElementSibling.innerHTML +="<br /> can't move";
            roll.style.display="initial";
        }
        else if(a2==1)
        {
            if(x!=6)
            {
                if((p3.start==1)&&(p3.completed==0))
                {
                    //drawing function to take of clearect;
                    c.clearRect(p3.x-31, p3.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5)";
                    c.fillRect(p3.x-31, p3.y-31, 62,62);
                    if(p3.y == 50)
                    {
                        p3.x += 100*x;
                        if(p3.x > 750)
                        {
                            p3.y  += p3.x - 750;
                            p3.x= 750;
                        }
                    }
                    else if(p3.y==750)
                    {
                        p3.x = p3.x - 100*x;
                        if(p3.x < 50)
                        {
                            p3.y=p3.y-(50 - p3.x);
                            p3.x = 50;
                        }
                    }
                    else if(p3.x==750)
                    {
                        p3.y = p3.y + 100*x;
                        if(p3.y==650)
                        {
                            p3.completed=1;
                            p3.x=500;
                            p3.y=600;
                        }
                        else if(p3.y > 650)
                        {
                            p3.y = p3.y - 100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    else if(p3.x==50)
                    {
                        p3.y=p3.y-100*x;
                        if(p3.y<50)
                        {
                            p3.x= p3.x + 50 - p3.y;
                            p3.y=50;
                        } 
                    }
                    if(p3.y==650 && p3.x==750)
                    {
                        p3.completed=1;
                        p3.x=500;
                        p3.y=600;
                    }

                    if(p3.x==p1.x && p3.y==p1.y)
                    {
                        p1.start=0;
                        p1.x=200;
                        p1.y=400;
                        c.beginPath();
                        c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 244, 3)';
                        c.fillStyle='rgb(252, 244, 3)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    if(p3.x==p2.x && p3.y==p2.y)
                    {
                        p2.start=0;
                        p2.x=300;
                        p2.y=400;
                        c.beginPath();
                        c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 250, 169)';
                        c.fillStyle='rgb(252, 250, 169)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    c.beginPath();
                    c.arc( p3.x, p3.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    
                }
                else if((p4.start==1)&&(p4.completed==0))
                {
                    //drawing function to take of clearect;
                    c.clearRect(p4.x-31, p4.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p4.x-31, p4.y-31, 62,62);
                    if(p4.y == 50)
                    {
                        p4.x += 100*x;
                        if(p4.x > 750)
                        {
                            p4.y  += p4.x - 750;
                            p4.x= 750;
                        }
                    }
                    else if(p4.y==750)
                    {
                        p4.x = p4.x - 100*x;
                        if(p4.x < 50)
                        {
                            p4.y=p4.y-(50 - p4.x);
                            p4.x = 50;
                        }
                    }
                    else if(p4.x==750)
                    {
                        p4.y = p4.y + 100*x;
                        if(p4.y==650)
                        {
                            p4.completed=1;
                            p4.x=600;
                            p4.y=600;
                        }
                        else if(p4.y > 650)
                        {
                            p4.y = p4.y - 100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    else if(p4.x==50)
                    {
                        p4.y=p4.y-100*x;
                        if(p4.y<50)
                        {
                            p4.x= p4.x + 50 - p4.y;
                            p4.y=50;
                        } 
                    }
                    if(p4.y==650 && p4.x==750)
                    {
                        p4.completed=1;
                        p4.x=500;
                        p4.y=600;
                    }
                    if(p4.x==p1.x && p4.y==p1.y)
                    {
                        p1.start=0;
                        p1.x=200;
                        p1.y=400;
                        c.beginPath();
                        c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 244, 3)';
                        c.fillStyle='rgb(252, 244, 3)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    if(p4.x==p2.x && p4.y==p2.y)
                    {
                        p2.start=0;
                        p2.x=300;
                        p2.y=400;
                        c.beginPath();
                        c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 250, 169)';
                        c.fillStyle='rgb(252, 250, 169)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    c.beginPath();
                    c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc(p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                }
                else
                roll.nextElementSibling.innerHTML +="<br /> can't move";
                roll.style.display="initial";
            }

            else
            {
                if(p3.completed==0)
                {
                    c1.style.display="initial";
                    c1.onclick = function(){
                        c1.style.display="none";
                        c2.style.display="none";
                        if(p3.start==1)
                        {
                            c.clearRect(p3.x-31, p3.y-31, 62, 62);
                            c.fillStyle="rgba(255,0,0,0.5";
                            c.fillRect(p3.x-31, p3.y-31, 62,62);
                            if(p3.y == 50)
                            {
                                p3.x += 100*x;
                                if(p3.x > 750)
                                {
                                    p3.y  += p3.x - 750;
                                    p3.x= 750;
                                }
                            }
                            else if(p3.y==750)
                            {
                                p3.x = p3.x - 100*x;
                                if(p3.x < 50)
                                {
                                    p3.y=p3.y-(50 - p3.x);
                                    p3.x = 50;
                                }
                            }
                            else if(p3.x==750)
                            {
                                p3.y = p3.y + 100*x;
                                if(p3.y==650)
                                {
                                    p3.completed=1;
                                    p3.x=500;
                                    p3.y=600;
                                }
                                else if(p3.y > 650)
                                {
                                    p3.y = p3.y - 100*x;
                                    roll.nextElementSibling.innerHTML +="<br /> can't move";
                                }
                            }
                            else if(p3.x==50)
                            {
                                p3.y=p3.y-100*x;
                                if(p3.y<50)
                                {
                                    p3.x= p3.x + 50 - p3.y;
                                    p3.y=50;
                                } 
                            }
                            if(p3.y==650 && p3.x==750)
                            {
                                p3.completed=1;
                                p3.x=500;
                                p3.y=600;
                            }
                            if(p3.x==p1.x && p3.y==p1.y)
                            {
                                p1.start=0;
                                p1.x=200;
                                p1.y=400;
                                c.beginPath();
                                c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 244, 3)';
                                c.fillStyle='rgb(252, 244, 3)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            if(p3.x==p2.x && p3.y==p2.y)
                            {
                                p2.start=0;
                                p2.x=300;
                                p2.y=400;
                                c.beginPath();
                                c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 250, 169)';
                                c.fillStyle='rgb(252, 250, 169)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            c.beginPath();
                            c.arc( p3.x, p3.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(5, 34, 252)';
                            c.fillStyle='rgb(5, 34, 252)';
                            c.fill();
                            c.stroke();
                            c.beginPath();
                            c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(143, 156, 247)';
                            c.fillStyle='rgb(143, 156, 247)';
                            c.fill();
                            c.stroke();
                        }
                    else
                    {
                        c.clearRect(p3.x-31, p3.y-31, 62, 62);
                        c.fillStyle="black";
                        c.fillRect(p3.x-31, p1.y-31, 62,62);
                        p3.x=750;
                        p3.y=750;
                        if(p3.x==p1.x && p3.y==p1.y)
                        {
                            p1.start=0;
                            p1.x=200;
                            p1.y=400;
                            c.beginPath();
                            c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(252, 244, 3)';
                            c.fillStyle='rgb(252, 244, 3)';
                            c.fill();
                            c.stroke();
                            a1=a1-1;
                        }
                        if(p3.x==p2.x && p3.y==p2.y)
                        {
                            p2.start=0;
                            p2.x=300;
                            p2.y=400;
                            c.beginPath();
                            c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(252, 250, 169)';
                            c.fillStyle='rgb(252, 250, 169)';
                            c.fill();
                            c.stroke();
                            a1=a1-1;
                        }
                        c.beginPath();
                        c.arc(p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(5, 34, 252)';
                        c.fillStyle='rgb(5, 34, 252)';
                        c.fill();
                        c.stroke();
                        p3.start=1;
                        a2=2;
                    }
                    roll.style.display="initial";}
                };
                if(p4.completed==0)
                {
                    c2.style.display="initial";
                    c2.onclick= function(){
                        c1.style.display="none";
                        c2.style.display="none";
                        if(p4.start==1)
                        {
                            c.clearRect(p4.x-31, p4.y-31, 62, 62);
                            c.fillStyle="rgba(255,0,0,0.5";
                            c.fillRect(p4.x-31, p4.y-31, 62,62);
                            if(p4.y == 50)
                            {
                                p4.x += 100*x;
                                if(p4.x > 750)
                                {
                                    p4.y  += p4.x - 750;
                                    p4.x= 750;
                                }
                            }
                            else if(p4.y==750)
                            {
                                p4.x = p4.x - 100*x;
                                if(p4.x < 50)
                                {
                                    p4.y=p4.y-(50 - p4.x);
                                    p4.x = 50;
                                }
                            }
                            else if(p4.x==750)
                            {
                                p4.y = p4.y + 100*x;
                                if(p4.y==650)
                                {
                                    p4.completed=1;
                                    p4.x=600;
                                    p4.y=600;
                                }
                                else if(p4.y > 650)
                                {
                                    p4.y = p4.y - 100*x;
                                    roll.nextElementSibling.innerHTML +="<br /> can't move";
                                }
                            }
                            else if(p4.x==50)
                            {
                                p4.y=p4.y-100*x;
                                if(p4.y<50)
                                {
                                    p4.x= p4.x + 50 - p4.y;
                                    p4.y=50;
                                } 
                            }
                            if(p4.y==650 && p4.x==750)
                            {
                                p4.completed=1;
                                p4.x=500;
                                p4.y=600;
                            }
                            if(p4.x==p1.x && p4.y==p1.y)
                            {
                                p1.start=0;
                                p1.x=200;
                                p1.y=400;
                                c.beginPath();
                                c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 244, 3)';
                                c.fillStyle='rgb(252, 244, 3)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            if(p4.x==p2.x && p4.y==p2.y)
                            {
                                p2.start=0;
                                p2.x=300;
                                p2.y=400;
                                c.beginPath();
                                c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 250, 169)';
                                c.fillStyle='rgb(252, 250, 169)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            c.beginPath();
                            c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                            c.strokeStyle='rgb(143, 156, 247)';
                            c.fillStyle='rgb(143, 156, 247)';
                            c.fill();
                            c.stroke();
                            c.beginPath();
                            c.arc(p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(5, 34, 252)';
                            c.fillStyle='rgb(5, 34, 252)';
                            c.fill();
                            c.stroke();
                        }
                        else
                        {
                            c.clearRect(p4.x-31, p4.y-31, 62, 62);
                            c.fillStyle="black";
                            c.fillRect(p4.x-31, p4.y-31, 62,62);
                            p4.x=750;
                            p4.y=750;
                            if(p4.x==p1.x && p4.y==p1.y)
                            {
                                p1.start=0;
                                p1.x=200;
                                p1.y=400;
                                c.beginPath();
                                c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 244, 3)';
                                c.fillStyle='rgb(252, 244, 3)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            if(p4.x==p2.x && p4.y==p2.y)
                            {
                                p2.start=0;
                                p2.x=300;
                                p2.y=400;
                                c.beginPath();
                                c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                                c.strokeStyle='rgb(252, 250, 169)';
                                c.fillStyle='rgb(252, 250, 169)';
                                c.fill();
                                c.stroke();
                                a1=a1-1;
                            }
                            c.beginPath();
                            c.arc(p4.x, p4.y, 30, Math.PI*0, Math.PI *2, true);
                            c.strokeStyle='rgb(143, 156, 247)';
                            c.fillStyle='rgb(143, 156, 247)';
                            c.fill();
                            c.stroke();
                            p4.start=1;
                            a2=2;
                        }
                        roll.style.display="initial"; 
                    };
                }
            }
        }
        else if(a2==2)
        {
            if(p3.completed==0)
            {
                c1.style.display="initial";
                c1.onclick = function(){
                    c1.style.display="none";
                    c2.style.display="none";
                    c.clearRect(p3.x-31, p3.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p3.x-31, p3.y-31, 62,62);
                    if(p3.y == 50)
                    {
                        p3.x += 100*x;
                        if(p3.x > 750)
                        {
                            p3.y  += p3.x - 750;
                            p3.x= 750;
                        }
                    }
                    else if(p3.y==750)
                    {
                        p3.x = p3.x - 100*x;
                        if(p3.x < 50)
                        {
                            p3.y=p3.y-(50 - p3.x);
                            p3.x = 50;
                        }
                    }
                    else if(p3.x==750)
                    {
                        p3.y = p3.y + 100*x;
                        if(p3.y==650)
                        {
                            p3.completed=1;
                            p3.x=500;
                            p3.y=600;
                        }
                        else if(p3.y > 650)
                        {
                            p3.y = p3.y - 100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    else if(p3.x==50)
                    {
                        p3.y=p3.y-100*x;
                        if(p3.y<50)
                        {
                            p3.x= p3.x + 50 - p3.y;
                            p3.y=50;
                        } 
                    }
                    if(p3.y==650 && p3.x==750)
                    {
                        p3.completed=1;
                        p3.x=500;
                        p3.y=600;
                    }
                    if(p3.x==p1.x && p3.y==p1.y)
                    {
                        p1.start=0;
                        p1.x=200;
                        p1.y=400;
                        c.beginPath();
                        c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 244, 3)';
                        c.fillStyle='rgb(252, 244, 3)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    if(p3.x==p2.x && p3.y==p2.y)
                    {
                        p2.start=0;
                        p2.x=300;
                        p2.y=400;
                        c.beginPath();
                        c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 250, 169)';
                        c.fillStyle='rgb(252, 250, 169)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    c.beginPath();
                    c.arc( p3.x, p3.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    roll.style.display="initial"; 
                    if(p3.completed==1 && p4.completed==1)
                    prompt("player:2 wins");
                };
            }
            if(p4.completed==0)
            {
                c2.style.display="initial";
                c2.onclick = function(){
                    c1.style.display="none";
                    c2.style.display="none";
                    c.clearRect(p4.x-31, p4.y-31, 62, 62);
                    c.fillStyle="rgba(255,0,0,0.5";
                    c.fillRect(p4.x-31, p4.y-31, 62,62);
                    if(p4.y == 50 )
                    {
                        p4.x += 100*x;
                        if(p4.x > 750)
                        {
                            p4.y  += p4.x - 750;
                            p4.x= 750;
                        }
                    }
                    else if(p4.y==750)
                    {
                        p4.x = p4.x - 100*x;
                        if(p4.x < 50)
                        {
                            p4.y=p4.y-(50 - p4.x);
                            p4.x = 50;
                        }
                    }
                    else if(p4.x==750)
                    {
                        p4.y = p4.y + 100*x;
                        if(p4.y==650)
                        {
                            p4.completed=1;
                            p4.x=600;
                            p4.y=600;
                        }
                        else if(p4.y > 650)
                        {
                            p4.y = p4.y - 100*x;
                            roll.nextElementSibling.innerHTML +="<br /> can't move";
                        }
                    }
                    else if(p4.x==50)
                    {
                        p4.y=p4.y-100*x;
                        if(p4.y<50)
                        {
                            p4.x= p4.x + 50 - p4.y;
                            p4.y=50;
                        } 
                    }
                    if(p4.y==650 && p4.x==750)
                    {
                        p4.completed=1;
                        p4.x=500;
                        p4.y=600;
                    }
                    if(p4.x==p1.x && p4.y==p1.y)
                    {
                        p1.start=0;
                        p1.x=200;
                        p1.y=400;
                        c.beginPath();
                        c.arc( p1.x, p1.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 244, 3)';
                        c.fillStyle='rgb(252, 244, 3)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    if(p4.x==p2.x && p4.y==p2.y)
                    {
                        p2.start=0;
                        p2.x=300;
                        p2.y=400;
                        c.beginPath();
                        c.arc( p2.x, p2.y, 30, Math.PI*0, Math.PI *2, true);
                        c.strokeStyle='rgb(252, 250, 169)';
                        c.fillStyle='rgb(252, 250, 169)';
                        c.fill();
                        c.stroke();
                        a1=a1-1;
                    }
                    c.beginPath();
                    c.arc( p4.x, p4.y, 30, Math.PI * 0, Math.PI * 2, true);
                    c.strokeStyle='rgb(143, 156, 247)';
                    c.fillStyle='rgb(143, 156, 247)';
                    c.fill();
                    c.stroke();
                    c.beginPath();
                    c.arc(p3.x, p3.y, 30, Math.PI*0, Math.PI *2, true);
                    c.strokeStyle='rgb(5, 34, 252)';
                    c.fillStyle='rgb(5, 34, 252)';
                    c.fill();
                    c.stroke();
                    roll.style.display="initial"; 
                    if(p3.completed==1 && p4.completed==1)
                    alert("player:2 wins");
                };
            }
        }
        i=i+1;
        roll.nextElementSibling.innerHTML +="<br />next, player-1 turn";
    }
};



