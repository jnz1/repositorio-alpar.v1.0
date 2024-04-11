function enterPokedex() {
    var trainerName = document.getElementById("trainerName").value;
    if (trainerName.trim() !== "") {
      location.href = './pokedex/index.html';
    } else {
      alert("Por favor, insira seu nome de treinador Pokémon.");
    }
  }