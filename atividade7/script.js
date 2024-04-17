const controleIluminacao = ControleIluminacao.getInstance();

function toggleLight(room) {
    const checkbox = document.getElementById(`${room}-toggle`);
    const newState = checkbox.checked ? "desligada" : "ligada";
    controleIluminacao.toggleLight(room);

    checkbox.disabled = true;
    setTimeout(() => {
        checkbox.disabled = false;
    }, 500);
}

function updateStatus(room, state) {
    const statusElement = document.getElementById(`${room}-status`);
    statusElement.textContent = state === "ligada" ? "ON" : "OFF";
    statusElement.style.color = "white";

    const roomContainer = document.getElementById(room);
    roomContainer.classList.remove("ligado", "desligado");
    roomContainer.classList.add(state === "ligada" ? "ligado" : "desligado");

    const checkbox = document.getElementById(`${room}-toggle`);
    checkbox.checked = state === "ligada";
}

const rooms = ["sala", "cozinha", "banheiro", "suite", "porao", "garagem"];
rooms.forEach(room => {
    controleIluminacao.addObserver(room, state => updateStatus(room, state));
});
