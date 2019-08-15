require([
  "esri/WebMap",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "esri/widgets/Feature"
], function (WebMap, FeatureLayer, MapView, Feature) {
  var puntaje = 0
  var intentos = 4
  var enJuego = true
  const municipiosInit = ['LA CALERA', 'GUASCA', 'FÓMEQUE', 'JUNÍN', 'GACHETÁ', 'GAMA', 'GACHALÁ', 'MEDINA']
  var municipios = municipiosInit
  var municipio
  var labelOn
  municipioAleatorio()

  var modal = document.getElementById("myModal");
  var modalInicio = document.getElementById('modalInicio')
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
    alertaGano()
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      alertaGano()
    }
  }

  const fLayer = new FeatureLayer({
    portalItem: {
      id: "e0bc38a2446049ab90b77be81a20c574"
    },
    outFields: ["*"],
    labelsVisible: false
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
  var btnReiniciar = document.getElementById('reiniciar')
  var btnJugar = document.getElementById('jugar')
  var nombreMunicipio = document.getElementById('nombre-municipio')
  var preguntaDiv = document.getElementById('pregunta')
  var sound = document.getElementById("audio");
  var preguntasDiv = document.getElementById("instrucciones-div")

  btnEnviar.onclick = function () {
    let form = document.getElementById('form')
    let valueRespuestaUno = form.elements["respuesta-0"].value
    let valueRespuestaDos = form.elements["respuesta-1"].value
    let valueRespuestaTres = form.elements["respuesta-2"].value
    if (valueRespuestaUno === "true" && valueRespuestaDos === "true" && valueRespuestaTres === "true") {
      modal.style.display = "block"
      if (municipios.length > 0) {
        puntaje+=3    
        siguientePregunta()
        enJuego = true
      } else {
        enJuego = false
        limpiarPreguntas()
        nombreMunicipio.innerHTML = '¡Has ganado!<br><br>Tu puntaje es: '+puntaje+'/24'
        btnReiniciar.style.visibility = 'visible'
      }
    } else {
      alertaError()
      //sound.play();
    }
  }

  btnReiniciar.onclick = function () {
    intentos = 4
    enJuego = true
    municipios = municipiosInit
    municipioAleatorio()
    for (let i = 0; i < intentos; i++) {
      document.getElementById('vidas_' + i).src = 'assets/life.png'
    }
    map.removeAll()
    map.add(fLayer)
    limpiarPreguntas()
    btnReiniciar.style.visibility = 'hidden'
  }

  btnJugar.onclick = function () {
    modalInicio.style.display = "none"
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
    modal.style.display = "none";
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
  function limpiarInstrucines(){
    preguntasDiv.innerHTML = ''
    while (preguntasDiv.firstChild){
      preguntasDiv.removeChild(preguntasDiv.firstChild);
    }
    preguntasDiv.style.display='none'

  }

  function intentoFallido() {
    intentos -= 1
    if (intentos > 0) {
      document.getElementById('vidas_' + intentos).src = 'assets/death.png'
    } else {
      limpiarInstrucines()
      document.getElementById('vidas_' + intentos).src = 'assets/death.png'
      var labelOn = new FeatureLayer({
        portalItem: {
          id: "e0bc38a2446049ab90b77be81a20c574"
        },
        outFields: ["*"],
        definitionExpression: "MPIO_CNMBR like '" + municipio + "'"
      });
      enJuego = false
      map.add(labelOn);
      modal.style.display = "none";
      nombreMunicipio.innerHTML = '¡Has perdido!<br><br>Tu puntaje: '+puntaje+'/24'
      btnReiniciar.style.visibility = 'visible'
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
                enJuego = false;
                labelOn = new FeatureLayer({
                  portalItem: {
                    id: "e0bc38a2446049ab90b77be81a20c574"
                  },
                  outFields: ["*"],
                  definitionExpression: "MPIO_CNMBR like '" + municipio + "'"
                });
                map.add(labelOn);
                var valor = preguntas.filter(function ({
                  nombre
                }) {
                  return nombre === result
                })
                limpiarInstrucines()
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