export default class Trainer {
  constructor(
    id,
    badge,
    name,
    email,
    password,
    teams,
    friends,
    pokemon,
    collection,
    created
  ) {
    this.id = id;
    this.badge = badge;
    this.name = name;
    this.email = email;
    this.password = password;
    this.teams = teams;
    this.friends = friends;
    this.pokemon = pokemon;
    this.collection = collection;
    this.created = created;
  }
}