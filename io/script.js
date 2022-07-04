function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("try").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://orientaverso.000webhostapp.com/php/insert.php");
    xhttp.send();
  }