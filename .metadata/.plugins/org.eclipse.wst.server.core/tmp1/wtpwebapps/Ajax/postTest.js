var req;


function sendRequest(){
	function handleResponse(){

		if(req.readyState === 4 && req.status===200){
			document.getElementById("resp").innerHTML = req.responseText;
		}
		req = new XMLHttpRequest();
		var param = "name="+document.getElementById("nm").value;
		req.open("POST","http://localhost:8080/Ajax-project/TestServlet",true);
		req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		req.onreadystatechange=handleResponse;
		req.send(param);
	}


}