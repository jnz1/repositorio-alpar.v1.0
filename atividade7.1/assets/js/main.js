const roomSwitch = document.querySelector(".room-switch");
const kitchenSwitch = document.querySelector(".kitchen-switch");
const quartoSwitch = document.querySelector(".quarto-switch");
const banheiroSwitch = document.querySelector(".banheiro-switch");
const poraoSwitch = document.querySelector(".porao-switch");
const garagemSwitch = document.querySelector(".garagem-switch");

roomSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("room");
});

kitchenSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("kitchen");
});

quartoSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("quarto");
});

banheiroSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("banheiro");
});

poraoSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("porao");
});

garagemSwitch.addEventListener("change", () => {
    controleIluminacao.instance.toggle("garagem");
});

controleIluminacao.instance.inscrever(() => {
    const roomContainer = document.querySelector(".room-container");
    if (controleIluminacao.instance.getState("room")) {
        roomContainer.classList.add("active-container");
    } else {
        roomContainer.classList.remove("active-container");
    }
});

controleIluminacao.instance.inscrever(() => {
    const kitchenContainer = document.querySelector(".kitchen-container");
    if (controleIluminacao.instance.getState("kitchen")) {
        kitchenContainer.classList.add("active-container");
    } else {
        kitchenContainer.classList.remove("active-container");
    }
});

controleIluminacao.instance.inscrever(() => {
    const quartoContainer = document.querySelector(".quarto-container");
    if (controleIluminacao.instance.getState("quarto")) {
        quartoContainer.classList.add("active-container");
    } else {
        quartoContainer.classList.remove("active-container");
    }
});

controleIluminacao.instance.inscrever(() => {
    const banheiroContainer = document.querySelector(".banheiro-container");
    if (controleIluminacao.instance.getState("banheiro")) {
        banheiroContainer.classList.add("active-container");
    } else {
        banheiroContainer.classList.remove("active-container");
    }
});

controleIluminacao.instance.inscrever(() => {
    const poraoContainer = document.querySelector(".porao-container");
    if (controleIluminacao.instance.getState("porao")) {
        poraoContainer.classList.add("active-container");
    } else {
        poraoContainer.classList.remove("active-container");
    }
});

controleIluminacao.instance.inscrever(() => {
    const garagemContainer = document.querySelector(".garagem-container");
    if (controleIluminacao.instance.getState("garagem")) {
        garagemContainer.classList.add("active-container");
    } else {
        garagemContainer.classList.remove("active-container");
    }
});
