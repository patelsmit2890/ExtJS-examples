//copy example from http://try.sencha.com/extjs/4.1.1/  and paste it here(copy from app.js)

Ext.onReady(function(){

	//alert("Smit");
	Ext.Msg.alert("Smit Patel");
	Ext.Msg.confirm("Confirm","r u wantg to quit?",
			function(btn){
		if(btn=='yes'){
			Ext.Msg.alert("great..!!");
		}else{
			Ext.Msg.alert("Thanks..!!");
		};
	});

});
