~function(){
	function verification(id){
		this.codeText = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
		this.container = document.getElementById(id);
		this.box = document.createElement("div");
		this.code = "";
		this.createbox();
		this.createNumber();
	}
	verification.prototype = {
		constructor:verification,
		createbox:function(){
			this.box.style.border = "1px solid #ccc";
			this.box.style.width = "90px";
			this.box.style.lineHeight = "32px";
			this.box.style.textAlign = "center";
			this.box.style.letterSpacing = "5px";
			this.container.appendChild(this.box);
			var that = this;
			this.box.onclick = function(){
				that.createNumber();
			}
		},
		createNumber:function(){
			function ran(n,m){
				return Math.round(Math.random()*(m-n)+n)
			}
			var len = this.codeText.length-1;
			this.code = "";
			for(var i = 0; i<4;i++){
				this.code += this.codeText.charAt(ran(0,len));
			}
			this.box.innerText = this.code;
		},
		verifi:function(code){
			var userCode = code.toLowerCase();
			var Vcode = this.code.toLowerCase();
			if(userCode == Vcode){
				this.createNumber();
				return true;
			}else{
				this.createNumber();
				return false;
			}
		}
	}
	
	window.verification = verification;
}()
