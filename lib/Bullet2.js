/*
 총알이 위로 날라가는 유형의 게임에 적절함.
*/
var Bullet2=function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velY=0; //y축의 방향으로 몇씩 움직일지 결정하는 변수!!
	this.st;


	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/gallerxy/bullet.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

		this.move();
	}
	
	this.move=function(){
		var me=this;

		this.y=this.y-this.velY;
		this.img.style.top=this.y+"px";
		//적군과 출돌시 총알 제거..
		//대왕 파리와 나와 서로 마주쳤나?? 판단하기!!
		//console.log("대왕 파리의 갯수는"+kingArray.length)
		for(var a=0;a<allArray.length;a++){
			for(var i=0;i<allArray[a].length;i++){
				var result=hitTest(this.img,allArray[a][i].img);
				if(result){
				console.log("킹과 마주쳤어!!")
					
				//왕죽고
				this.stage.removeChild(allArray[a][i].img);
				allArray[a][i].flag=false;

				//나죽고

				this.stage.removeChild(this.img);
				clearTimeout(this.st);

				break;
				return;
				}
			}
		}	
		//총알이 시야에서 사라지면 setTimeout  종료!!

		this.st=setTimeout(function(){
			me.move();
		},10)
	}
}