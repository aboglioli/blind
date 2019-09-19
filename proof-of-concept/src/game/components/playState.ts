export interface IPlay {
  state:{
    loop: 50000, // Loop del estado actual a repetir
    break:20000, // Inicio a partir de la segunda vuelta del loop
    defaultOption:{ // Opcion por default al transcurrir loops sin interaccion del usuario
      loops:5, // Ejemnplo a los 5 loops
      audio: "end1.mp4", // audio a reproducir
      option:"state1" // Opcion a elegir por dfefault
    },
    audioEvents:{ // Eventos de audios a disparar al llegar al tiempo indicado
      0:{ // Ejemplo en tiempo "0"
        audio:["intro1.mp4"] // Posibles audios a disparar
      }
      20000:{ // Ejemplo audio en tiempo "20000"
        audio:["option2.mp4"]
      }
    },
    options:{ //Opciones para cambiar de estado
      state1:{ //Opcion para cambiar al estado "state1"
        idKey:"ADFG$$%&%/#$Y&K#/#%&", // Referencia de estado
        checkCharacterStatus:{objects:["closetKey1", "Pantuflas"]}, // Checkeo de CharacterState para poder elegir opción
        negativeAudio: ["negativeCloset.mp4"], // Posibles audios en caso de no poder realizar la acción
        text: "Ir abrir el closet", //Texto que se visualiza
        start:5000, //Segundos en el bucle para mostrar opcion
        finish:20000, //Segundos para que se oculte
        inputs:{ //Inputs que recibe
          voice:["ir", "vamos", ""], //posibles entradas de voz
          touch:true, //Para evento de boton
          movements:["shake"] // Posibles interacciones extras
        },
        transition:{ // Transicion al cambiar de estado eligiendo esta opcion
          time:4000, // Tiempo de transicion
          audio:"transition1.mp4" // Audio a disparar
        }
      },
      state6:{
        idKey:"34G45GH4IRUH#$Y&K#/#%&",
        check:{objects:["doorKey1", "Ropa"], health:80},
        negativeAudio: ["negativeDoor1.mp4"],
        text: "Ir a la puerta",
        start:5000,
        finish:30000,
        inputs:{
          voice:["puerta"],
          touch:true
        },
        transition:{
          time:4000,
          audio:"transition1.mp4"
        }
      }
    }
  }
}
