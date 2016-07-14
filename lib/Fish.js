var Fish = function(stage,width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.targetX;// 도달 해야할 목표지점
	this.targetY;// 도달 해야할 목표지점
	this.a=0.9;	//남은 거리의 몇%를 가야 할지를 결정 하는 비율 계수
	this.velX=0;//물체의 속도를 결정 하는 변수
	this.velY=0;//물체의 속도를 결정 하는 변수

	this.init =function(){
		this.div=document.createElement("div");
		this.div.innerText="☆";
		this.div.style.fontSize=this.width+"px";
		this.div.style.fontweight="bold";

		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.stage.appendChild(this.div);

		this.move();
	}
	this.move= function(){
		var me=this;
		var posX=parseInt(this.div.style.left);//현재 나의 위치
		var posY=parseInt(this.div.style.top);//현재 나의 위치
			
		//목표지점에 도달 하려는 로직!!!
		this.div.style.left=this.targetX-this.a*(this.targetX-posX)+"px";
		this.div.style.top=this.targetY-this.a*(this.targetY-posY)+"px";

		setTimeout(function(){
			me.move();
		},30);
	}
}