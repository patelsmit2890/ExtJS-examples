Ext.onReady(function(){
	Ext.get("text1").on({
		click:function(){
			alert("click event fired");
		},
		keyup:function(){
			alert("keyup");
		}

	});


	Ext.create("Ext.button.Button",{
		text:"click me",
		listeners:{
			click:function(){
				alert("thanks for clicking");
			},
			mouseover:function(){
				alert("on mouse");
			}
		},
		renderTo:"div1"
	});
});