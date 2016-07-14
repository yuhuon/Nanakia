var DateBox =function(stage,width,height,text){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.text=text;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.float="left";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		this.div.style.border="1px solid blue";
		this.div.innerText=this.text;

		this.stage.appendChild(this.div);
	}
}