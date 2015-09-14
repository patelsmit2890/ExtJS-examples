 Ext.define("Employee",{
 id:0,
 name:"",
 designation:"",
 constructor:function(id,name,desig){
 this.id = id;
 this.name=name;
 this.designation = desig;
 },
 printDetails:function(){
 
 console.log(this.id+"\t"+this.name+"\t"+this.designation);
 	//alert(this.id+"\t"+this.name+"\t"+this.designation);
 }
 }
 );
 
 Ext.onReady(function(){
 
 	var emp1 = Ext.create("Employee",1,"Rajiv","Developer");
 	var emp2 = Ext.create("Employee",2,"Deva","Accountant");
 	emp1.printDetails();
 	emp2.printDetails();
 });