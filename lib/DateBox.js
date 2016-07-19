var DateBox =function(stage,width,height,text){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.tarea;//undefined
	this.content;//입력 폼과 내용을 담을 div
	this.title;//날짜를 담을 div
	this.input;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.float="left";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		this.div.style.border="1px solid blue";
		//this.div.innerText=this.text;
	
	
		this.title=document.createElement("div");
		this.title.style.width=100+"%";
		this.title.style.height=25+"px";
		this.title.innerText=this.text;
		this.div.appendChild(this.title);
		
		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=55+"px";
		this.content.style.overflow="scroll";
		this.content.style.fontSize="9pt"
		this.div.appendChild(this.content);
		
		//div 에 대한 이벤트 처리
		this.div.addEventListener("click",function(){
			//alert(me.div.innerText+"일이네요");
			if(me.tarea==undefined){//생성된 적이 없다면...
				me.createForm();
			}
		});

		this.stage.appendChild(this.div);
	}

	//클릭시 TextArea와 Button을 등장 시키기!!
	this.createForm=function(){
		this.tarea=document.createElement("textarea");
		
		this.tarea.style.width=75+"%";
		this.tarea.style.height=25+"px;"
		this.tarea.style.background="Green"
		this.input=document.createElement("input");	
		this.input.type="button";
		this.input.value="등록";
			
		this.input.addEventListener("click",function(){
				me.showContent();
			});


		this.content.appendChild(this.tarea);
		this.content.appendChild(this.input);
	}

	//컨텐츠 출력
	this.showContent=function(){
		//textarea의 값 얻기!!
		var str=this.tarea.value;
		//content div의 자식 요소들을 제거하고 ,str content 출력
		this.content.removeChild(this.tarea);
		this.content.removeChild(this.input);

		this.content.innerText=str;
	}
}