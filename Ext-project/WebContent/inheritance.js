Ext.define("A",{

	i:0,
	print:function(){
	console.log("i:"+this.i);
	},
	constructor:function(i){
	this.i=i;
	}
	});
	
	Ext.define("B",{
	extend:"A",
	j:1,
	print:function(){
	this.callParent();
	console.log("j:"+this.j);
	},
	constructor:function(i,j){
	this.callParent([i]);
	this.j=j;
	}
		
	});
	Ext.onReady(function(){
	var b = Ext.create("B",10,20);
	b.print();	
	});
	