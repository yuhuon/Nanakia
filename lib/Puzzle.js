/*----------------------------------------
퍼즐을 객체로 정의해보자!!
이 퍼즐에 클릭 이벤트까지 구현할 예정..
----------------------------------------*/
var Puzzle = function(stage,width,height,color){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.color=color;

	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.color;
		this.div.style.float="left";

		//부착!!
		this.stage.appendChild(this.div);
		
		//div 에 이벤트 구현 
		this.div.addEventListener("mousemove", function(){
			//alert(me.color+"눌럿어?");
			me.div.style.background="";
		});
	}
}