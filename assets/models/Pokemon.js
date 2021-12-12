export default class Pokemon {
  constructor(
    name,
    id,
    types,
    abilities,
    image,
    shiny,
    female,
    shinyFemale,
    otherForms,
    formsHistory,
    stats,
    size,
    weight
  ) {
    this.name = name;
    this.id = id;
    this.types = types;
    this.abilities = abilities;
    this.image = image;
    this.shiny = shiny;
    this.female = female;
    this.shinyFemale = shinyFemale;
    this.otherForms = otherForms;
    this.formsHistory = formsHistory;
    this.stats = stats;
    this.size = size;
    this.weight = weight;
  }
}
