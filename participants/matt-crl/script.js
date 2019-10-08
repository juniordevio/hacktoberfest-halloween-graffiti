var canvas,ctx,sita,bgr,tim,gtx,gty;

(function(){
    var grd;
    canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');
    canvas.width=canvas.height=400;
    sita=200;
    grd=ctx.createLinearGradient(0,0,0,sita);
    grd.addColorStop(0,"hsl("+155+",90%,10%)");
    grd.addColorStop(1,"hsl("+155+",90%,50%)");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,canvas.width,sita);
    
    grd=ctx.createLinearGradient(0,sita,0,canvas.height);
    grd.addColorStop(0,"hsl("+155+",90%,50%)");
    grd.addColorStop(1,"hsl("+155+",90%,10%)");
    ctx.fillStyle=grd;
    ctx.fillRect(0,sita,canvas.width,canvas.height);
    bgr=ctx.getImageData(0,0,canvas.width,canvas.height);
    baum();
})();

function baum(){
    var a,b,c,max,tm;
    ctx.putImageData(bgr,0,0);
    tim=new Date().getTime()/300;
    tim+=Math.sin(tim/29)*20;
    gtx=(Math.sin(tim/7)+Math.sin(tim/11))*30;
    gty=(Math.sin(tim/17)+Math.sin(tim/19))/2+3;
    max=9;
    tm=tim/19+gty;
    b=tm%(1/max);
    for(a=0;a<max;a++)twis(b+a/max,tm);
    ctx.globalCompositeOperation="destination-over";
    ctx.fillStyle="rgb(222,222,222)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(baum);
}

function twis(nam,xp){
    var a,b,c,d,e,mt,max,x,y,p,hei,hp,zoom,bai,st,lit,x1,y1,x2,y2,x3;
    ctx.globalCompositeOperation="source-over";
    ctx.strokeStyle="rgb(255,255,255)";
    
    mt=new Float32Array(140);
    xp-=nam;
    xp*=73;
    a=1.005-nam;
    zoom=1/(a*a);
    hei=sita+zoom*22-55;
    hp=zoom*5;
    p=[];
    bai=zoom;
    d=0.4;
    st=-(1/bai)*mt.length/2+gtx;
    for(b=0;b<4;b++){
        for(a=0;a<mt.length;a++){
            x=st+a/bai;
            mt[a]+=Math.sin(x*d+xp);
        }
        d*=0.4;
    }
    
    lit=1;
    if(nam<0.2)lit=(nam*5);
    if(nam>0.6)lit=(1-nam)*2.5;
    ctx.fillStyle="hsla(222,45%,"+((50-nam*30)|0)+"%,"+lit+")";
    
    ctx.beginPath();
    for(a=20;a<mt.length-20;a++){
        x=(a-20)/(mt.length-40-1)*canvas.width;
        ctx.lineTo(x,hei-(mt[a])*hp);
    }
    a=hei+hp*14;
    if(a>400)a=400;
    ctx.lineTo(400,a);
    ctx.lineTo(0,a);
    ctx.fill();
    
    a=1.005-nam;
    c=zoom/2;
    b=(a*a*40+40)|0;
    if(b%2==1)b++;
    e=(gtx)%(5);
    f=Math.floor(gtx/5);
    for(a=0;a<b;a++){
        x=(a-b/2)*bai*5;
        x+=70-e*bai;
        x1=x-c;
        x2=x+c;
        if(x1<0)continue;
        if(x2>=mt.length-1)return;
        
        x3=Math.floor(x1);
        r1=x1-x3;
        
        r2=1-r1;
        d=mt[x3]*r2+mt[x3+1]*r1;
        y1=hei-d*hp;
        
        x3=Math.floor(x2);
        r1=x2-x3;
        
        r2=1-r1;
        d=mt[x3]*r2+mt[x3+1]*r1;
        y2=hei-d*hp;
        x1=(x1-70)/(mt.length-41)*canvas.width+200;
        x2=(x2-70)/(mt.length-41)*canvas.width+200;
        
        bake(x1,y1,x2,y2,c,xp,lit);
    }
}

function bake(sx,sy,ex,ey,s,n,lit){
    var a,b,c,d,e,max,r1,r2,wid,hei,tx,ty,x,y,r,t,
        meme,kuti,ude,tuno,futo,kune,knr,knb;
    
    tx=(sx+ex)/2;
    ty=(sy+ey)/2;
    x=ex-sx;
    y=ey-sy;
    r=Math.atan2(y,x);
    wid=Math.pow(x*x+y*y,0.5)/2;
    
    max=40;
    t=(n+tim/7)%1;
    t*=4;
    t=t%2;
    
    if(t>1){
        t=t-1;
        t*=2;
        t=1-t;
        if(t<0)t=0;
    }
    
    t=0.5+t/2;
    
    
    ctx.save();
    ctx.translate(tx,ty);
    ctx.rotate(r);
    ctx.translate(-tx,-ty);
    
    hei=s*30*t;
    
    meme=n%13<4;
    a=n%17;
    if(a<7)kuti=1;
    if(a<3)kuti=2;
    ude=n%15<3;
    tuno=n%11<2;
    futo=1;
    if(n%9<1)futo=2;
    
    kune=(n%7<1);
    knr=15+(n%20);
    knb=0.5+(n%23)/23;
    
    if(tuno){
        ctx.globalCompositeOperation="source-over";
        ctx.fillStyle="rgba(233,211,115,"+lit+")";
        ctx.beginPath();
        e=hei*1.2;
        ctx.lineTo(tx,ty-e);
        ctx.lineTo(tx-wid/2,ty-hei*0.8);
        ctx.lineTo(tx+wid/2,ty-hei*0.8);
        ctx.fill();
    }
    
    ctx.globalCompositeOperation="destination-out";
    ctx.fillStyle="rgba(255,255,255,"+lit+")";
    
    if(ude){
        e=hei*0.3;
        f=wid*t*1.45;
        ctx.fillRect(tx-f,ty-e-f/6,f*2,f/3);
        ctx.beginPath();
        ctx.arc(tx-f,ty-e,f/6,0,Math.PI*2,0);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(tx+f,ty-e,f/6,0,Math.PI*2,0);
        ctx.fill();
    }
    
    ctx.beginPath();
    
    for(e=0;e<max;e++){
        x=e/(max-1)-0.5;
        y=0.5+Math.cos(x*Math.PI*2)/2;
        
        x1=x*wid*2+tx;
        y1=-y*hei+ty;
        
        r=-e/(max-1)*Math.PI*2-Math.PI/2;
        
        x=Math.cos(r)*futo;
        y=-Math.sin(r)-1;
        x2=x*wid*1.5+tx;
        y2=y*hei/2+ty;
        
        r1=Math.abs((e/(max-1)-0.5)*2);
        r2=1-r1;
        x=r1*x1+r2*x2;
        y=r1*y1+r2*y2;
        
        if(kune){
            f=1;
            if(a%6===0)f=-1;
            x+=Math.sin(e/(max-1)*knr+tim/13*Math.PI*2*f)*wid/4*knb;
        }
        ctx.lineTo(x,y);
    }
    ctx.fill();
    
    ctx.globalCompositeOperation="destination-over";
    
    ctx.fillStyle="rgb(0,0,0)";
    ty-=hei*0.6;
    s*=0.2;
    
    x=tx;
    y=ty;
    
    if(meme){
        ctx.fillRect(x-10*s-5*s,y-2*s-2*s,10*s,4*s);
        ctx.fillRect(x+10*s-5*s,y-2*s-2*s,10*s,4*s);
    }else{
        ctx.beginPath();
        ctx.arc(x-10*s,y-2*s,4*s,0,Math.PI*2,0);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x+10*s,y-2*s,4*s,0,Math.PI*2,0);
        ctx.fill();
    }
    
    y+=15*s;
    
    if(kuti==2){
        
        ctx.strokeStyle="rgba(0,0,0,"+lit+")";
        ctx.beginPath();
        ctx.arc(x+5*s,y,5*s,0,Math.PI,0);
        ctx.arc(x-5*s,y,5*s,0,Math.PI,0);
        ctx.stroke();
        
        
    }else if(kuti==1){
        
        ctx.strokeStyle="rgba(100,55,11,"+lit+")";
        ctx.beginPath();
        ctx.lineTo(x-14.9*s,y);
        ctx.lineTo(x+14.9*s,y);
        ctx.stroke();
        
        a=s*0.8;
        ctx.fillStyle="hsla(44,70%,60%,"+lit+")";
        ctx.beginPath();
        ctx.lineTo(x-15*a,y);
        ctx.lineTo(x,y+9*a);
        ctx.lineTo(x+15*a,y);
        ctx.lineTo(x,y-9*a);
        ctx.fill();
        
        
        ctx.fillStyle="rgba(100,55,11,"+lit+")";
        ctx.beginPath();
        ctx.lineTo(x-15*s,y);
        ctx.lineTo(x,y+9*s);
        ctx.lineTo(x+15*s,y);
        ctx.lineTo(x,y-9*s);
        ctx.fill();
        
    }else{
        
        ctx.fillStyle="rgba(211,122,100,"+lit+")";
        ctx.strokeStyle="rgba(100,55,11,"+lit+")";
        
        
        ctx.beginPath();
        ctx.lineTo(x-13*s,y);
        ctx.lineTo(x+13*s,y);
        ctx.stroke();
        
        ctx.beginPath();
        r=0;
        for(a=0;a<60;a++){
            ctx.lineTo(x+Math.cos(r)*12*s,y+Math.sin(r)*8*s);
            r+=Math.PI*2/60;
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    ctx.restore();
}