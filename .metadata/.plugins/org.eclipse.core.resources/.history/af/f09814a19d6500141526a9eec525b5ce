Ext.define("Address",{
location:"",
city:"",
constructor:function(location,city){
this.location=location;
this.city=city;
},
print:function(){
console.log("********Address*********");
console.log(this.location+"\t"+this.city);
}
});

Ext.define("Person",{
name:"",
gender:"",
address:null,
constructor:function(name,gender,address){
this.name=name;
this.gender=gender;
this.address=address;
},
print:function(){
console.log("Name:"+this.name);
console.log("Gender:"+this.gender);
this.address.print();
}
});

Ext.define("Employee",{
	extend:"Person",
	empId:0,
	designation:"",

constructor:function(empId,name,gender,designation,address){
	this.callParent([name,gender,address]);
this.empId=empId;
this.designation=designation;
},
print:function(){
	this.callParent();
console.log("Emp ID:"+this.empId);
console.log("Emp Desig:"+this.designation);
}
});

Ext.onReady(function(){
var address = Ext.create("Address","Kundanahalli Gate","Blore");
var emp = Ext.create("Employee",1,"Bhagwan","Male","Developer",address);
emp.print();
});
