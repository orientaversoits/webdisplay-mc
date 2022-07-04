var mysql = require('mysql');

var con = mysql.createConnection({
  host: "id19192937_orientaverso",
  user: "id19192937_orientaverso_",
  password: "2UoMPLbkimnuo$vLuru!"
});

con.connect(function(err) {
    let out;
  if (err) out=err;//throw err;
  else out="Connected" 
  document.getElementById("sql").innerText=out;
});