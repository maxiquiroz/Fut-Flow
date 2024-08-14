document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        appendMessage('Usuario', userInput);
        document.getElementById('user-input').value = '';
        getBotResponse(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = 'No entiendo lo que dices.';

    const questionsAndAnswers = {
        '¿Cuáles son los métodos de pago disponibles?': 'Aceptamos tarjetas de crédito, PayPal y transferencias bancarias.',
        '¿Cuánto cuesta el envío?': 'El costo de envío es de $5.99 a nivel nacional. Para envíos internacionales, por favor consulta nuestra página de envíos.',
        '¿Cuánto tiempo tarda en llegar mi pedido?': 'Los pedidos nacionales tardan entre 3-5 días hábiles. Los envíos internacionales pueden tardar de 7-14 días hábiles.',
        '¿Tienen camisetas de equipos específicos?': 'Sí, tenemos camisetas de una amplia variedad de equipos de fútbol. Puedes buscar por equipo en nuestra página web.',
        '¿Puedo devolver una camiseta si no me queda bien?': 'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre y cuando la camiseta esté en su estado original.',
        '¿Tienen descuentos para compras al por mayor?': 'Sí, ofrecemos descuentos para compras al por mayor. Por favor, contáctanos para más detalles.',
        '¿Ofrecen personalización de camisetas?': 'Sí, podemos personalizar camisetas con nombres y números. Por favor, consulta nuestra página de personalización para más información.',
        '¿Dónde están ubicados?': 'Nuestra tienda principal está ubicada en Madrid, España. También tenemos sucursales en otras ciudades importantes.',
    };

    userInput = userInput.trim().toLowerCase();
    Object.keys(questionsAndAnswers).forEach(question => {
        if (userInput.includes(question.toLowerCase())) {
            botResponse = questionsAndAnswers[question];
        }
    });

    setTimeout(function() {
        appendMessage('Bot', botResponse);
    }, 500);
}
