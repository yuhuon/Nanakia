/*이 클래스는 사물을 표현하는 것은 맞지만
단지, 동작은 제외하고 , 오직 데이터만을 보유시키기 위한
클래스로 정의 한다.. 이러한 역활을 수행하는 객체를 
가리켜 설계분야에서는 DTO(Data Transfer Object)라고 한다*/
var Member=function(){
	this.id;
	this.pw;
	this.name;
	this.money;
}