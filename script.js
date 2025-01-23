// Función para calcular el descuento con Promises
function calcularDescuento(precio, descuento) {
    return new Promise((resolve, reject) => {
        if (precio > 0 && descuento >= 0) {
            const descuentoCalculado = precio * (descuento / 100);
            const precioFinal = precio - descuentoCalculado;
            resolve({ precioFinal, descuentoCalculado });
        } else {
            reject("El precio debe ser mayor a 0 y el descuento no puede ser negativo.");
        }
    });
}

// Obtener elementos del DOM
const precioInput = document.getElementById('precio');
const descuentoInput = document.getElementById('descuento');
const calcularButton = document.getElementById('calcular-descuento');
const resultadoElement = document.getElementById('resultado');

// Evento para calcular descuento
calcularButton.addEventListener('click', () => {
    const precio = parseFloat(precioInput.value);
    const descuento = parseFloat(descuentoInput.value);

    if (!isNaN(precio) && !isNaN(descuento)) {
        calcularDescuento(precio, descuento)
            .then(({ precioFinal, descuentoCalculado }) => {
                resultadoElement.textContent = `El descuento es: S/.${descuentoCalculado.toFixed(2)}. 
                El precio final es: S/.${precioFinal.toFixed(2)}.`;
            })
            .catch((error) => {
                resultadoElement.textContent = error;
            });
    } else {
        resultadoElement.textContent = "Por favor, ingresa números válidos.";
    }
});