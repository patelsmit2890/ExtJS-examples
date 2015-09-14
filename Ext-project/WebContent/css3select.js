Ext.onReady(function(){
	Ext.select("div[id^='test']").addCls("second");
	var button1=Ext.create("Ext.button.Button",{
		text:"change",
		handler:function()
		{
			var firsts=Ext.select(".first");
			var seconds=Ext.select(".second");
			var thirds=Ext.select(".third");
			
			firsts.removeCls("first");
			firsts.addCls("third");
			
			seconds.removeCls("second");
			seconds.addCls("first");
			
			thirds.removeCls("third");
			thirds.addCls("second");
		},
		renderTo:"div6"
});
	
});
