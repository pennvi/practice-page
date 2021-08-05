let myReq = getXMLHttpRequest();

function getXMLHttpRequest() {
    return new XMLHttpRequest();
}

function callAjax() {
    var url = "clock.php";
    var myRand = parseInt(Math.random() * 999999);
    myReq.open("GET", url + "?rand=" + myRand, true);
    myReq.onreadystatechange = responseAjax;
    myReq.send(null);
}


function responseAjax() {
    if(myReq.readyState == 4) {
        alert(myReq.responseText)
        var now = new Date;
        var localTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var serverTime = myReq.responseText;
        document.getElementById("clock").innerHTML = "Server: " + serverTime + "<br/>" + "Local: " + localTime;
    }
    else alert("gof uck yourself" + myReq.statusText)
}
