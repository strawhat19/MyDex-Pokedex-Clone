export default class Pokemon {
  constructor(
    name,
    id,
    types,
    image,
    shiny,
    stats,
    size,
    weight,
    description
  ) {
    this.name = name;
    this.id = id;
    this.types = types;
    this.image = image;
    this.shiny = shiny;
    this.stats = stats;
    this.size = size;
    this.weight = weight;
    this.description = description;
  }
}
