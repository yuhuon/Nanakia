var Block = function(stage,width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.img.style.position="absolute"
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.stage.appendChild(this.img)
			
		this.move();
	}

	this.move=function(){
		
	
	
		
	}
	
}