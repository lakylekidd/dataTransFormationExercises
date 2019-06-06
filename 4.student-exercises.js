const getTrainersAndGymsAndPokemons = (gyms, trainers, pokemons) => {
  // Combine trainers and pokemons and gyms
  return (
    trainers
      // Map trainers to include their pokemons
      .map(trainer => {
        // Include the trainer's pokemons
        trainer.pokemons = pokemons.filter(pokemon =>
          trainer.pokemonIds.includes(pokemon.id)
        );
        // Include the trainer's gym
        trainer.gym = gyms.filter(gym => gym.trainerId === trainer.id);
        return trainer;
      })
  );
};

const getPsychicTrainersAndGyms = (gyms, trainers, pokemons) => {
  // Step 1: Combine trainers and psychic pokemons
  let trainersWithPsychicPokemons = trainers
    // Map trainers to include their pokemons
    .map(trainer => {
      trainer.pokemons = pokemons.filter(pokemon =>
        trainer.pokemonIds.includes(pokemon.id)
      );
      return trainer;
    })
    // Filter the resulted trainer and return only the ones
    // that actually have at least one psychic pokemon
    .filter(trainer =>
      trainer.pokemons.some(pokemon => pokemon.type.includes("Psychic"))
    );
  // Retrieve the gyms of these trainers
  return trainersWithPsychicPokemons.map(trainer => {
    // Assign the gym to the trainer
    trainer.gym = gyms.find(gym => gym.trainerId === trainer.id);
    return trainer;
  });
};

module.exports = {
  getPsychicTrainersAndGyms,
  getTrainersAndGymsAndPokemons
};