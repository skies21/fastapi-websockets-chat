document.addEventListener("DOMContentLoaded", function () {
    const ws = new WebSocket("ws://localhost:8000/ws");
    const form = document.getElementById("message-form");
    const input = document.getElementById("message-input");
    const messagesList = document.getElementById("messages-list");

    ws.onmessage = function (event) {
        const data = JSON.parse(event.data);
        const listItem = document.createElement("li");
        listItem.textContent = `${data.id}: ${data.text}`;
        messagesList.appendChild(listItem);
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (input.value.trim() !== "") {
            ws.send(JSON.stringify({ message: input.value }));
            input.value = "";
        }
    });
});
