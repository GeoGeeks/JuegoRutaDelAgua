const preguntas = [{
  nombre: 'MEDINA',
  ficha: 'assets/ficha_medina.jpg',
  preguntas: [{
    txt: '¿Cómo se conoce al municipio de Medina?',
    respuestas: [{
        txt: 'La puerta de los Andes',
        valida: false
      },
      {
        txt: 'La puerta del llano',
        valida: true
      },
      {
        txt: 'La puerta abierta',
        valida: false
      }
    ]
  }, {
    txt: '¿Medina tiene 13 ríos. ¿Cuáles de estos hacen parte ellos?',
    respuestas: [{
        txt: 'Gazamumo y Gazaunta',
        valida: true
      },
      {
        txt: 'Pico’e loro y Totumo',
        valida: false
      },
      {
        txt: 'Resquebrajo y Simbitero',
        valida: false
      }
    ]
  }, {
    txt: '¿Cuál es el nombre de una de las cascadas del municipio de Medina?',
    respuestas: [{
        txt: 'La leona',
        valida: true
      },
      {
        txt: 'La osa',
        valida: false
      },
      {
        txt: 'La guacamaya',
        valida: false
      }
    ]
  }]
}, {
  nombre: 'GACHALÁ',
  ficha: 'assets/ficha_gachala.jpg',
  preguntas: [{
    txt: 'Uno de los puntos más representativos de Gachalá es una parte de este embalse:',
    respuestas: [{
        txt: 'El Sisga',
        valida: false
      },
      {
        txt: 'Tominé',
        valida: false
      },
      {
        txt: 'El Guavio',
        valida: true
      }
    ]
  }, {
    txt: 'Esta es una de las cascadas que se encuentra en Gachalá:',
    respuestas: [{
        txt: 'Monteovejuno',
        valida: false
      },
      {
        txt: 'Montecristo',
        valida: true
      },
      {
        txt: 'Montenegro',
        valida: false
      }
    ]
  }, {
    txt: '¿A cuántos kilómetros está Gachalá de Bogotá?',
    respuestas: [{
        txt: '110',
        valida: false
      },
      {
        txt: '174',
        valida: false
      },
      {
        txt: '120',
        valida: true
      }
    ]
  }]
}, {
  nombre: 'GAMA',
  ficha: 'assets/ficha_gama.jpg',
  preguntas: [{
    txt: '¿Cómo se llama la laguna más representativa del municipio de Gama?',
    respuestas: [{
        txt: 'El rubí',
        valida: false
      },
      {
        txt: 'El diamante',
        valida: false
      },
      {
        txt: 'La esmeralda',
        valida: true
      }
    ]
  }, {
    txt: '¿Además de El guarumal y El retiro, ¿qué cascada es llamativa en Gama?',
    respuestas: [{
        txt: 'La pichina',
        valida: false
      },
      {
        txt: 'La palma',
        valida: true
      },
      {
        txt: 'El gato dormido',
        valida: false
      }
    ]
  }, {
    txt: 'Uno de los platos tradicionales en Gama es el:',
    respuestas: [{
        txt: 'Tamal gamense',
        valida: true
      },
      {
        txt: 'Picado de cabro gamense',
        valida: false
      },
      {
        txt: 'Cocido de gallina gamense',
        valida: false
      }
    ]
  }]
}, {
  nombre: 'GACHETÁ',
  ficha: 'assets/ficha_gacheta.jpg',
  preguntas: [{
    txt: 'Uno de los manjares de Gachetá es el:',
    respuestas: [{
        txt: 'Alfeñique',
        valida: false
      },
      {
        txt: 'Alcornoque',
        valida: false
      },
      {
        txt: 'Alfandoque',
        valida: true
      }
    ]
  }, {
    txt: 'En Gachetá se encuentra esta importante central hidroeléctrica:',
    respuestas: [{
        txt: 'Central Hidroeléctrica del Guamo',
        valida: false
      },
      {
        txt: 'Central Hidroeléctrica del Guavio',
        valida: true
      },
      {
        txt: 'Central Hidroeléctrica de Ituango',
        valida: false
      }
    ]
  }, {
    txt: 'Gachetá también es famoso por su puerto fluvial, llamado:',
    respuestas: [{
        txt: 'Doradal',
        valida: false
      },
      {
        txt: 'El piñal',
        valida: true
      },
      {
        txt: 'Caimanero',
        valida: false
      }
    ]
  }]
}, {
  nombre: 'JUNÍN',
  ficha: 'assets/ficha_junin.jpg',
  preguntas: [{
    txt: '¿En Junín hay unas cascadas imperdibles de casi 50m de altura.¿Cómo se llaman?',
    respuestas: [{
        txt: 'Cascadas de Sueva',
        valida: true
      },
      {
        txt: 'Cascadas del encanto',
        valida: false
      },
      {
        txt: 'Cascadas de Zaque',
        valida: false
      }
    ]
  }, {
    txt: '¿Junín solía llamarse de otra forma.¿Cuál era el nombre y qué significaba en lengua muisca?',
    respuestas: [{
        txt: 'Lenguazaque.Significaba “Hablamos con el Zaque”',
        valida: false
      },
      {
        txt: 'Chipazaque.Significaba “Nuestro padre, el Zaque”',
        valida: true
      },
      {
        txt: 'Tepanzaque.Significaba “Aquí habita el Zaque”',
        valida: false
      }
    ]
  }, {
    txt: 'Junín es uno de los nueve municipios que hacen parque de este parque natural:',
    respuestas: [{
        txt: 'Parque Nacional Natural El Cocuy',
        valida: false
      },
      {
        txt: 'Parque Nacional Natural Sumapaz',
        valida: false
      },
      {
        txt: 'Parque Nacional Natural Chingaza',
        valida: true
      }
    ]
  }]
}, {
  nombre: 'GUASCA',
  ficha: 'assets/ficha_guasca.jpg',
  preguntas: [{
    txt: '¿A qué altura está la laguna de Siecha, atractivo del municipio de Guasca?',
    respuestas: [{
        txt: '3.673 msnm',
        valida: true
      },
      {
        txt: '3.879 msnm',
        valida: false
      },
      {
        txt: '3.214 msnm',
        valida: false
      }
    ]
  }, {
    txt: 'Estas especies se encuentran en el ecosistema de Guasca:',
    respuestas: [{
        txt: 'Colibrí cola amarilla y osos hormigueros',
        valida: false
      },
      {
        txt: 'Guacamayas y gatos montañeses',
        valida: false
      },
      {
        txt: 'Osos de anteojos y venados cola blanca',
        valida: true
      }
    ]
  }, {
    // TODO CORREGIR
    txt: '¿Qué traduce Guasca en lengua muisca?',
    respuestas: [{
        txt: '“Entre ríos”',
        valida: true
      },
      {
        txt: '“Rodeado de bosques”',
        valida: false
      },
      {
        txt: '“Casa de osos”',
        valida: false
      }
    ]
  }]
}, {
  nombre: 'LA CALERA',
  ficha: 'assets/ficha_la_calera.jpg',
  preguntas: [{
    txt: 'La Calera tiene un cerro cuyo nombre está inspirado en una leyenda popular. ¿Cuál es?',
    respuestas: [{
        txt: 'El cerro de la patasola',
        valida: false
      },
      {
        txt: 'El cerro del medio pollo',
        valida: false
      },
      {
        txt: 'El cerro del Mohán',
        valida: true
      }
    ]
  }, {
    txt: 'Estas quebradas son de las más importantes del municipio de La Calera:',
    respuestas: [{
        txt: 'Calostro y Blanca',
        valida: true
      },
      {
        txt: 'Síncope y Azul',
        valida: false
      },
      {
        txt: 'Catalera y Dorada',
        valida: false
      }
    ]
  }, {
    txt: '¿Cómo se llama la reserva que se encuentra en el municipio de La Calera?',
    respuestas: [{
        txt: 'La Curubita',
        valida: false
      },
      {
        txt: 'La Calentana',
        valida: false
      },
      {
        txt: 'La Chucua',
        valida: true
      }
    ]
  }]
}, {
  nombre: 'FÓMEQUE',
  ficha: 'assets/ficha_fomeque.jpg',
  preguntas: [{
    txt: '¿Fómeque, en muisca, traduce “el bosque de...” qué animales?',
    respuestas: [{
        txt: 'El bosque de los osos',
        valida: false
      },
      {
        txt: 'El bosque los venados',
        valida: false
      },
      {
        txt: 'El bosque de los zorros',
        valida: true
      }
    ]
  }, {
    txt: 'Uno de los mayores atractivos gastronómicos de Fómeque son los tamales de:',
    respuestas: [{
        txt: 'Arroz',
        valida: false
      },
      {
        txt: 'Calabaza',
        valida: true
      },
      {
        txt: 'Mazorca.',
        valida: false
      }
    ]
  }, {
    txt: 'El embalse de La Chuza, que está en el municipio de Fómeque, abastece este porcentaje del agua de Bogotá:',
    respuestas: [{
        txt: '40%',
        valida: false
      },
      {
        txt: '60%',
        valida: false
      },
      {
        txt: '80%',
        valida: true
      }
    ]
  }]
}]