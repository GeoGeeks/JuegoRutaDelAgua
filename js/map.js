require([
  "esri/WebMap",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "esri/widgets/Feature"
], function (WebMap, FeatureLayer, MapView, Feature) {

  var intentos = 3
  var enJuego = true
  var municipios = ['LA CALERA', 'GUASCA', 'FÓMEQUE', 'JUNÍN', 'GACHETÁ', 'GAMA', 'GACHALÁ', 'MEDINA']
  var municipio
  municipioAleatorio()

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const fLayer = new FeatureLayer({
    portalItem: {
      id: "e0bc38a2446049ab90b77be81a20c574"
    },
    outFields: ["*"],
    labelsVisible: false
  });

  var labelOn = new FeatureLayer({
    portalItem: {
      id: "e0bc38a2446049ab90b77be81a20c574"
    },
    outFields: ["*"],
    definitionExpression: "MPIO_CNMBR like '" + municipio + "'"
  });

  const map = new WebMap({
    basemap: "satellite",
    layers: [fLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-73.7, 4.5],
    zoom: 10.5,
    popup: {
      autoOpenEnabled: false
    }
  });

  var btnEnviar = document.getElementById('enviar')
  var nombreMunicipio = document.getElementById('nombre-municipio')
  var preguntaDiv = document.getElementById('pregunta')

  btnEnviar.onclick = function () {
    let form = document.getElementById('form')
    let valueRespuestaUno = form.elements["respuesta-0"].value
    let valueRespuestaDos = form.elements["respuesta-1"].value
    let valueRespuestaTres = form.elements["respuesta-2"].value
    if (valueRespuestaUno === "true" && valueRespuestaDos === "true" && valueRespuestaTres === "true") {
      modal.style.display = "block";
      if (municipios.length > 0) {
        siguientePregunta()
        enJuego = true
      } else {
        nombreMunicipio.innerHTML = 'Has ganado!'
      }
    } else {
      intentoFallido()
    }
  }

  function crearPregunta(pregunta, id) {
    let h2 = document.createElement("h2")
    h2.innerHTML = pregunta.txt
    preguntaDiv.appendChild(h2)
    for (let i = 0; i < pregunta.respuestas.length; i++) {
      let input = document.createElement("input")
      input.type = "radio"
      input.id = "respuesta-" + id + "-" + i
      input.name = "respuesta-" + id
      input.value = pregunta.respuestas[i].valida
      let label = document.createElement("label")
      label.innerHTML = pregunta.respuestas[i].txt
      label.htmlFor = input.id
      let br = document.createElement("br")
      preguntaDiv.appendChild(input)
      preguntaDiv.appendChild(label)
      preguntaDiv.appendChild(br)
    }
  }

  function mostrarPreguntasPorMunicipio(municipio) {
    nombreMunicipio.innerHTML = municipio.nombre
    document.getElementById('ficha').src = municipio.ficha
    for (let i = 0; i < municipio.preguntas.length; i++) {
      crearPregunta(municipio.preguntas[i], i)
    }
    btnEnviar.style.visibility = 'visible'
  }

  function municipioAleatorio() {
    var numAleatorio = Math.floor(Math.random() * municipios.length)
    municipio = municipios[numAleatorio]
    if (municipios.length > 0) {
      municipios.splice(numAleatorio, 1)
      document.getElementById('municipio-random').innerHTML = municipio
    }
  }

  function limpiarPreguntas() {
    nombreMunicipio.innerHTML = ''
    while (preguntaDiv.firstChild) {
      preguntaDiv.removeChild(preguntaDiv.firstChild)
    }
    btnEnviar.style.visibility = 'hidden'
  }

  function intentoFallido() {
    console.log(intentos)
    if (intentos > 0) {
      document.getElementById('vidas_' + intentos).src = 'assets/death.png'
      intentos -= 1
    } else {
      enJuego = false
      map.add(labelOn);
      nombreMunicipio.innerHTML = 'Has perdido!'
    }
  }

  function siguientePregunta() {
    limpiarPreguntas()
    municipioAleatorio()
  }

  view.when().then(function () {
    // Create a default graphic for when the application starts
    const graphic = {
      popupTemplate: {
        // content: "no es tal es medina es{MPIO_CNMBR}"
      }
    };

    // Provide graphic to a new instance of a Feature widget
    const feature = new Feature({
      container: "feature-node",
      graphic: graphic,
      map: view.map,
      spatialReference: view.spatialReference
    });

    view.whenLayerView(fLayer).then(function (layerView) {
      let highlight;
      // listen for the pointer-move event on the View
      view.on("click", function (event) {
        // Perform a hitTest on the View
        view.hitTest(event).then(function (event) {
          // Make sure graphic has a popupTemplate
          let results = event.results.filter(function (result) {
            result = result.graphic.attributes.MPIO_CNMBR
            if (enJuego) {
              if (result === municipio) {
                enJuego = false
                map.add(labelOn);
                var valor = preguntas.filter(function ({
                  nombre
                }) {
                  return nombre === result
                })
                mostrarPreguntasPorMunicipio(valor[0])
              } else {
                intentoFallido()
              }
            }
          });
          let result = results[0];
          highlight && highlight.remove();

          if (result) {
            feature.graphic = result.graphic;
            highlight = layerView.highlight(result.graphic);
          } else {
            feature.graphic = graphic;
          }
        });
      });
    });
  });
});