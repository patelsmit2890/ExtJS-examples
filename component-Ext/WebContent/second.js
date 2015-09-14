Ext.define("Mycomponent",{
	extend:"Ext.Component",
	html:"<b>This is my componet</b>",
	alias:"widget.mycomp"
});

var comp1=Ext.create("Mycomponent");
var comp2={
	xtype:"button",
	text:"Click Me",
	handler:function()
	{
		Ext.Msg.alert("Thanks","Thanks for clicking me");
	}
};

var p={
	xtype:"panel",
	title:"Test Panel",
	width:300,
	height:200,
	items:[
		{xtype:"mycomp"},comp2
	]
	//renderTo:Ext.getBody()		
};

Ext.onReady(function(){
var wnd=Ext.create("Ext.window.Window",{
	width:200,
	height:300,
	items:[p],
	renderTo:Ext.getBody(),
	resizable:true
});
wnd.show();
});