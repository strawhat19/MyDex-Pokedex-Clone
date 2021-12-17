export default class Pokemon {
  constructor(
    name,
    id,
    index,
    generation,
    types,
    image,
    shiny,
    stats,
    size,
    weight,
    description,
    altDescription
  ) {
    this.name = name;
    this.id = id;
    this.index = index;
    this.generation = generation;
    this.types = types;
    this.image = image;
    this.shiny = shiny;
    this.stats = stats;
    this.size = size;
    this.weight = weight;
    this.description = description;
    this.altDescription = altDescription;
  }
}