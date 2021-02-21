
function rand(){
 let x=Math.floor(1+Math.random() *4 );
 return x;
}

function play(){
	
    for(let j=1;j<5;j++){//cell[j]=[];
    for(let k=1;k<5;k++){cell[j][k]=0;}
	}
	let tes1=rand();
	if(tes1==1){Pic11();}
	if(tes1==2){Pic12();}
	if(tes1==3){Pic13();}
	if(tes1==4){Pic14();}
	
	
    
	document.getElementById("testNum").innerHTML="1st is "+tes1+" 2cd is "+tes2+" 3rd is "+tes3;
    check();
}

function check(){
}	
	