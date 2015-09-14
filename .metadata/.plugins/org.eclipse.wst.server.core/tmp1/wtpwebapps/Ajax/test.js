
Ext.onReady(function(){
	var req;



	req = new XMLHttpRequest();
	var param = "?name="+document.getElementById("nm").value;
	req.open("GET","http://localhost/Ajax/test.jsp"+param,true);
	req.onreadystatechange=handleResponse;
	req.send(null);

});

function handleResponse(){

	if(req.readyState === 4 && req.status===200){
		document.getElementById("resp").innerHTML = req.responseText;
	}
}