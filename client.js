var btn = document.getElementById("myBtn");
btn.addEventListener("click", getQuote, false);


function getQuote(){
    var text = document.createElement("h2");
    text.innerHTML = "Hola niños"
    document.body.appendChild(text)
}