var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.1;//중력을 표현하는 변수!!
	this.falling=true;//주인공이 떨어지고 있음을 알 수 있는 변수
	this.jumping=true;//주인공이 점프 중임을 알 수 있는 변수.
	this.speedCount=0;// 키보드 인식이 너무 빠르면 안되므로
							//actionCount  증가 시점을 늦출 변수!!
	this.running=false; //키보드 누를때만 true로 처리

	
	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;

		this.div.style.overflow="hidden";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		//숨겨진 이미지의 좌표 처리!!
		this.img.style.position="relative";
		//this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를 div에 탑재
		this.div.appendChild(this.img);
		//div를 stage에 탑재
		this.stage.appendChild(this.div);

		this.move();
		

	}

	
	//동작을 표현하는 메서드!
	//이 메서드 호출자는, 이미지의 경로를 인수로 넘기면 됨.
	this.action=function(){	//전역 변수인 actionCount를 여기서 증가 시키자!!
									//speedCount가 일정 시점에 도달하면.....
		if(this.running){//키보드 누를때만 아래 코드 수행!!
		this.speedCount++;

		if(this.speedCount%35==0){
			actionCount++
			if(actionCount>actionArray.length-1){
				actionCount=1;
			}
		}
		this.img.src=actionArray[actionCount];
		
		}else{
			this.img.src=actionArray[0];//서 있는 모습
		}
	}

	this.move=function(){
		var me=this;

		//중력 데이터를  velY에 누적 해보자!!
		this.velY+=this.gravity;

		//다시 falling을 true로 바꾼다.
		if(this.velY>0){
			this.jumping=false;
			this.falling=true;//주인공이 떨어지고 있음을 인식
		
		}

	
		//block과 마주 쳤는지 체크
		for(var i=0;i<blockArr.length;i++){
			var result=	hitTest(this.div , blockArr[i].img);
			if(result && this.falling){
				this.velY=0; //밟으면 떨어지지 않게 velY를 0으로 주자
				console.log("벽돌 밟았어");
				this.falling=false;//벽돌을 밟으면 더이상 떨어지지 않고 있음...
				
			}
		}
		this.y+=this.velY;	
		this.x+=this.velX;

		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

	
		
		this.action();

		setTimeout(function(){
			me.move();
		},5);
	
	}

}