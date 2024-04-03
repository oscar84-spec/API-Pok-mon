const inputValue = document.getElementById("search-input");
const buttonSearch = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImage = document.getElementById("img");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const getPokemon = async () => {
  try {
    const pokemon = inputValue.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`
    );
    const data = await res.json();

    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `#${data.id}`;
    pokemonWeight.textContent = `Weight: ${data.weight}`;
    pokemonHeight.textContent = `Height: ${data.height}`;
    pokemonImage.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" id="sprite" loading="lazy" />`;

    pokemonTypes.innerHTML = data.types
      .map(
        (obj) =>
          `<span class="element ${obj.type.name}">${obj.type.name}</span>`
      )
      .join("");

    pokemonHp.textContent = data.stats[0].base_stat;
    pokemonAttack.textContent = data.stats[1].base_stat;
    pokemonDefense.textContent = data.stats[2].base_stat;
    pokemonSpecialAttack.textContent = data.stats[3].base_stat;
    pokemonSpecialDefense.textContent = data.stats[4].base_stat;
    pokemonSpeed.textContent = data.stats[5].base_stat;
  } catch (error) {
    console.log(error);
    alert("Pokémon not found");
  }
};

buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  getPokemon();
});
