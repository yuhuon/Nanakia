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

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/gallerxy/byullet.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

	}
	
	this.move=function(){
		var me=this;

		this.y=this.y-this.velY;
		this.img.style.top=this.y+"px";

		setTimeout(function(){
			me.move();
		},10)
	}
}