function loadHeader() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "header.html", true);
    xhr.send();
}

function loadFooter() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "footer.html", true);
    xhr.send();
}

loadHeader()
loadFooter()