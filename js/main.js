function convertir () {
    var valore =parseInt(document.getElementById("valor").value);
    var resultado =0;
    var dolar=280.00;
    var euro=316.00;
    if (document.getElementById("uno").checked){
      resultado =valore /dolar;
      alert("El cambio de Pesos a Dolares es:" + resultado.toFixed(3));
    }
    else if (document.getElementById("dos").checked){
      resultado = valore / euro;
      alert ("El cambio de Pesos a Euros es:" + resultado.toFixed(3));
    }
    else {
      alert("Completa los campos requeridos")
    }
  }