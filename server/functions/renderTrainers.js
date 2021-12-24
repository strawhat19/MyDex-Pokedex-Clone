// Imports
import { renderPokemon, createPokemon } from './renderPokemon.js';
// Once Document is started, execute code below
document.addEventListener(`DOMContentLoaded`,event => {

  // Calls to DB
  const db = firebase.firestore();
  const currentTrainers = db.collection(`Trainers`);
  const currentTrainersElement = $(`#currentTrainers`);

  // Getting Trainers
  currentTrainers.get().then((users) => {

    // Storing it in a Variable
    const trainers = users.docs.map(trainer => trainer.data());

    // Render All Trainers Data
    trainers.map(trainer => {

      const {name,badge,email,dateCreated,pokemon} = trainer;

      let trainerElement = $(`
        <div class="trainerElement" id="trainer-${badge}">
          <div class="trainerData">
            <div class="trainerName">${name}</div>
            <div class="trainerBadge">${badge}</div>
            <div class="trainerDate">${dateCreated}</div>
            <div class="trainerEmail">${email}</div>
          </div>
          <div class="trainersTeams"></div>
          <div class="trainersFriends"></div>
        </div>
      `);

      let trainersPokemon = $(`<div class="trainersPokemon pokedex"></div>`);
      renderPokemon(trainersPokemon,trainer.pokemon);
     
      trainerElement.append(trainersPokemon);
      currentTrainersElement.append(trainerElement);

    });

  });

});
