Ext.Loader.setConfig({
paths:{
com:"js/com"
}
});


Ext.require("com.manhattan.training.Customer");
Ext.onReady(function(){
var c = Ext.create("com.manhattan.training.Customer",{customerId:1,custmorName:"Rajiv",balance:100})
c.printDetails();
});