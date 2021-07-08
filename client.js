var btn = document.getElementById("myBtn");
btn.addEventListener("click", getQuote, false);


function getQuote(){

    var xmlhttp = new XMLHttpRequest();   
    var theUrl = "http://localhost:3000";
    xmlhttp.open("POST", theUrl);
    var name = document.getElementById("name").value;
    console.log(name)
    var price = document.getElementById("price").value;
    console.log(price)
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({"name":name,"price":price}));


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var text = document.createElement("h2");
            text.innerHTML = xhttp.responseText;
            document.body.appendChild(text)
        }
    };
    xhttp.open("GET", "http://localhost:3000", true);
    xhttp.send() 
}