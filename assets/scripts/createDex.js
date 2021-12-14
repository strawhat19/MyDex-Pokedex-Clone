import { renderStatName } from "./renderStatName.js";
export const createDex = (gen, pokemon) => {
  let pokeElement = $(
    `
      <div class="pokemon ${pokemon.name}" id="${pokemon.id}" title="${pokemon.name}">
        <div class="pokeData">
            <div class="statsRow">
            <div class="stats">
                <span class="stat ${pokemon.stats[0].stat.name}" title="${pokemon.stats[0].stat.name}">${renderStatName(pokemon.stats[0].stat.name)}: ${pokemon.stats[0].base_stat}</span>
                <span class="stat ${pokemon.stats[1].stat.name}" title="${pokemon.stats[1].stat.name}">${renderStatName(pokemon.stats[1].stat.name)}: ${pokemon.stats[1].base_stat}</span>
                <span class="stat ${pokemon.stats[2].stat.name}" title="${pokemon.stats[2].stat.name}">${renderStatName(pokemon.stats[2].stat.name)}: ${pokemon.stats[2].base_stat}</span>
                <span class="stat weight" title="weight">WEIGHT: ${pokemon.weight} m</span>
            </div>
            <div id="${pokemon.id}" class="pokeImage ${pokemon.name}" alt="Image of ${pokemon.name}"></div>
            <div class="stats">
                <span class="stat ${pokemon.stats[3].stat.name}" title="${pokemon.stats[3].stat.name}">${renderStatName(pokemon.stats[3].stat.name)}: ${pokemon.stats[3].base_stat}</span>
                <span class="stat ${pokemon.stats[4].stat.name}" title="${pokemon.stats[4].stat.name}">${renderStatName(pokemon.stats[4].stat.name)}: ${pokemon.stats[4].base_stat}</span>
                <span class="stat ${pokemon.stats[5].stat.name}" title="${pokemon.stats[5].stat.name}">${renderStatName(pokemon.stats[5].stat.name)}: ${pokemon.stats[5].base_stat}</span>
                <span class="stat size" title="size">SIZE: ${pokemon.size} kg</span>
            </div>
            </div>
        </div>
        <div class="pokePic" id="${pokemon.id}">
            <div class="defaultPic" style="background: url(${pokemon.image})" id="${pokemon.id}">
                <div class="inner" id="${pokemon.id}">
                    <div class="pokeName">${pokemon.name}</div>
                </div>
            </div>
            <div class="shinyPic" style="background: url(${pokemon.shiny})" id="${pokemon.id}">
                <div class="inner" id="${pokemon.id}">
                    <div class="pokeName">Shiny ${pokemon.name}</div>
                </div>
            </div>
        </div>
      </div>
      `
  );

  if (pokemon.types.length == 1) {
    let pokeTypes = $(
      `
        <div class="types" id="${pokemon.name}-types">
          <span class="type single ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
          <p class="description">
            ${pokemon.description}
          </p>
          <div class="viewDetails">
            <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
          </div>
        </div>
        <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
        `
    );
    pokeElement.append(pokeTypes);
  } else {
    let pokeTypes = $(
      `
        <div class="types" id="${pokemon.name}-types">
          <span class="type ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
          <span class="type ${pokemon.types[1].type.name}" id="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
          <p class="description">
            ${pokemon.description}
          </p>
          <div class="viewDetails">
            <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
          </div>
        </div>
        <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
        `
    );
    pokeElement.append(pokeTypes);
  }
  gen.append(pokeElement);
};
