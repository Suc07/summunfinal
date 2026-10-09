var formulario = document.getElementById("booking-form");
var mensaje = document.getElementById("form-status");
var modalidad = document.getElementById("modalidad");
var direccionField = document.getElementById("direccion-field");
var direccion = document.getElementById("direccion");

// La dirección solo es obligatoria para delivery.
function actualizarDireccion() {
    var esDelivery = modalidad.value === "Delivery";
    direccion.required = esDelivery;
    direccionField.style.display = esDelivery ? "block" : "none";
}

modalidad.addEventListener("change", actualizarDireccion);
actualizarDireccion();

// Enviar el pedido a WhatsApp.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var datos = new FormData(formulario);
    var nombre = datos.get("nombre");
    var telefono = datos.get("telefono");
    var plato = datos.get("plato");
    var cantidad = datos.get("cantidad");
    var modalidadPedido = datos.get("modalidad");
    var pago = datos.get("pago");
    var direccionPedido = datos.get("direccion") || "No corresponde (recojo en local)";
    var comentario = datos.get("comentario") || "Sin comentarios";

    var texto =
        "Hola, Summun. Quiero hacer un pedido.%0A%0A" +
        "*Nombre:* " + encodeURIComponent(nombre) + "%0A" +
        "*Teléfono:* " + encodeURIComponent(telefono) + "%0A" +
        "*Plato:* " + encodeURIComponent(plato) + "%0A" +
        "*Cantidad:* " + encodeURIComponent(cantidad) + "%0A" +
        "*Modalidad:* " + encodeURIComponent(modalidadPedido) + "%0A" +
        "*Dirección:* " + encodeURIComponent(direccionPedido) + "%0A" +
        "*Pago:* " + encodeURIComponent(pago) + "%0A" +
        "*Comentarios:* " + encodeURIComponent(comentario);

    // Número de atención de ejemplo: reemplázalo por el WhatsApp real de Summun.
    var numeroSummun = "51999999999";
    var urlWhatsApp = "https://wa.me/" + numeroSummun + "?text=" + texto;

    mensaje.textContent = "Abriendo WhatsApp para enviar tu pedido...";
    mensaje.classList.add("success");

    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
});
