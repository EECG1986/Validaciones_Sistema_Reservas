// Definir la capacidad máxima del restaurante
var capacidadRestaurante = 30;

// Obtener el número de personas para la reserva
var numeroPersonas = 6; // Puedes cambiar este valor según la reserva

// Validar si el número de personas es menor o igual a la capacidad del restaurante
if (numeroPersonas <= capacidadRestaurante) {
    // Si es menor o igual, mostrar mensaje de disponibilidad
    console.log("El restaurante tiene disponibilidad para tu reserva.");
} else {
    // Si es mayor, mostrar mensaje de no disponibilidad
    console.log("No tenemos disponibilidad para tu reserva.");
}

let tipoDeReserva = '';  // Este valor se obtendrá del formulario de reserva.

switch(tipoDeReserva) {
    case 'cumpleaños':
        console.log("¿Quieres añadir un postre especial de cumpleaños a tu menú?");
        break;

    case 'aniversario':
        console.log("Ofrecemos una botella de champagne para celebrar. ¿Te gustaria añadirla?");
        break

    case 'reunion de negocios':
        console.log("Tenemos salones privados disponibles. ¿Deseas uno?");
        break

    case 'reserva normal':
        console.log("Gracias por tu reserva. Todo está listo para tu llegada.");
        break;

// completar casos
    default:
        console.log("Gracias por elegir nuestro restaurante. Tu mesa estará lista pronto.");
}

